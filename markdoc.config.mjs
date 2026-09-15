import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
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
          matches: ["google-play", "microsoft-store"],
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
