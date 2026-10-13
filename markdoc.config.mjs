import {
  defineMarkdocConfig,
  component,
  Markdoc,
} from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

const SCREENSHOT_SLOTS = ["large", "large2", "small", "small2"];

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
      render: component("./src/components/NahpuArchitecture.astro"),
      selfClosing: true,
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
