import {
  defineMarkdocConfig,
  component,
  Markdoc,
} from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";
import figures from "./src/assets/day-one/figures.json" with { type: "json" };

const SCREENSHOT_SLOTS = ["large", "large2", "small", "small2"];
const RECORD_NODE_IDS = figures.recordMap.nodes
  .map((n) => n.id)
  .sort()
  .join(",");

function validatePlacement(value) {
  const valid =
    Array.isArray(value) &&
    value.length === 2 &&
    value.every((n) => typeof n === "number" && n >= 0 && n <= 100);
  return valid
    ? []
    : [{ id: "pin-placement", level: "error", message: "Expected [x, y] percentages from 0 to 100" }];
}

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
    // A usage page's top figure: up to two large-screen and two small-screen
    // captures, with lettered `pin` children. Every pin must be placed on at
    // least one capture of each screen size, so readers find every element
    // whichever device they use. Pins are passed to the component as an array.
    screenshots: {
      render: component("./src/components/UsageScreenshots.astro"),
      children: ["tag"],
      attributes: {
        large: { type: String, required: true },
        largeAlt: { type: String, required: true },
        large2: { type: String },
        large2Alt: { type: String },
        small: { type: String, required: true },
        smallAlt: { type: String, required: true },
        small2: { type: String },
        small2Alt: { type: String },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        for (const shot of ["large2", "small2"]) {
          if (Boolean(attributes[shot]) !== Boolean(attributes[`${shot}Alt`])) {
            throw new Error(`screenshots: ${shot} and ${shot}Alt must be set together`);
          }
        }
        const pins = node.children
          .filter((child) => child.type === "tag" && child.tag === "pin")
          .map((child) => child.transformAttributes(config));
        for (const pin of pins) {
          for (const shot of SCREENSHOT_SLOTS) {
            if (pin[shot] && !attributes[shot]) {
              throw new Error(`pin ${pin.id}: ${shot} is placed, but the figure has no ${shot}`);
            }
          }
          if (!pin.large && !pin.large2) {
            throw new Error(`pin ${pin.id}: place it on a large-screen capture`);
          }
          if (!pin.small && !pin.small2) {
            throw new Error(`pin ${pin.id}: place it on a small-screen capture`);
          }
        }
        return new Markdoc.Tag(this.render, { ...attributes, pins }, []);
      },
    },
    // One element shown in the figure. Each placement is `[x, y]` in percent of
    // that capture's width and height.
    pin: {
      selfClosing: true,
      attributes: {
        id: { type: String, required: true, matches: /^[A-Z]$/ },
        label: { type: String, required: true },
        large: { type: Array, validate: validatePlacement },
        large2: { type: Array, validate: validatePlacement },
        small: { type: Array, validate: validatePlacement },
        small2: { type: Array, validate: validatePlacement },
      },
      transform() {
        return null;
      },
    },
    ref: {
      render: component("./src/components/ScreenshotRef.astro"),
      inline: true,
      selfClosing: true,
      attributes: {
        id: { type: String, required: true, matches: /^[A-Z]$/ },
      },
    },
    // Static NAHPU architecture diagram for the contributing guide.
    architecture: {
      render: component("./src/components/diagram/NahpuArchitecture.astro"),
      selfClosing: true,
    },
    // Static NAHPU persistence boundaries diagram for the contributing guide.
    persistence: {
      render: component("./src/components/diagram/PersistenceDiagram.astro"),
      selfClosing: true,
    },
    // Print-layout preset, template blocks, and template on one exported page.
    documentlayout: {
      render: component("./src/components/diagram/DocumentLayoutDiagram.astro"),
      selfClosing: true,
      attributes: {
        locale: {
          type: String,
          default: "en",
          matches: ["en", "pt", "es", "id"],
        },
      },
    },
    // Day One record map: the shared artwork with one labelled button per
    // `recordnode` child. Node ids must match `src/assets/day-one/figures.json`;
    // the app reads the same tags from the bundled Cookbook copy.
    recordmap: {
      render: component("./src/components/diagram/DayOneRecordMap.astro"),
      children: ["tag"],
      attributes: {
        label: { type: String, required: true },
        hint: { type: String, required: true },
      },
      transform(node, config) {
        const attributes = node.transformAttributes(config);
        const nodes = node.children
          .filter((child) => child.type === "tag" && child.tag === "recordnode")
          .map((child) => child.transformAttributes(config));
        const ids = nodes.map((n) => n.id).sort().join(",");
        if (ids !== RECORD_NODE_IDS) {
          throw new Error(`recordmap: expected one recordnode each for ${RECORD_NODE_IDS}`);
        }
        return new Markdoc.Tag(this.render, { ...attributes, nodes }, []);
      },
    },
    recordnode: {
      selfClosing: true,
      attributes: {
        id: { type: String, required: true },
        title: { type: String, required: true },
        summary: { type: String, required: true },
        detail: { type: String, required: true },
        paper: { type: String },
      },
      transform() {
        return null;
      },
    },
    // Day One practice trail: one waypoint per step of the `steps` list that
    // follows it. `progress` holds `{visited}` and `{total}` placeholders.
    fieldtrail: {
      render: component("./src/components/diagram/DayOneFieldTrail.astro"),
      selfClosing: true,
      attributes: {
        label: { type: String, required: true },
        hint: { type: String, required: true },
        progress: { type: String, required: true },
      },
    },
    carbonbadge: {
      render: component("./src/components/WebCarbonBadge.astro"),
      selfClosing: true,
    },
    storebadge: {
      render: component("./src/components/StoreBadge.astro"),
      selfClosing: true,
      attributes: {
        store: {
          type: String,
          required: true,
          matches: ["google-play", "microsoft-store", "app-store", "snap-store"],
        },
        locale: {
          type: String,
          default: "en",
          matches: ["en", "pt", "es", "id"],
        },
      },
    },
  },
});
