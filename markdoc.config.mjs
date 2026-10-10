import {
  defineMarkdocConfig,
  component,
  Markdoc,
} from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
    // A usage page's top figure: one large-screen and one small-screen capture,
    // with lettered `pin` children. Pins are passed to the component as an array.
    screenshots: {
      render: component("./src/components/UsageScreenshots.astro"),
      children: ["tag"],
      attributes: {
        large: { type: String, required: true },
        small: { type: String, required: true },
        largeAlt: { type: String, required: true },
        smallAlt: { type: String, required: true },
      },
      transform(node, config) {
        const pins = node.children
          .filter((child) => child.type === "tag" && child.tag === "pin")
          .map((child) => child.transformAttributes(config));
        return new Markdoc.Tag(
          this.render,
          { ...node.transformAttributes(config), pins },
          [],
        );
      },
    },
    pin: {
      selfClosing: true,
      attributes: {
        id: { type: String, required: true, matches: /^[A-Z]$/ },
        screen: { type: String, required: true, matches: ["large", "small"] },
        x: { type: Number, required: true },
        y: { type: Number, required: true },
        label: { type: String, required: true },
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
