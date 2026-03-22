import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from "@astrojs/starlight-markdoc";

export default defineMarkdocConfig({
  extends: [starlightMarkdoc()],
  tags: {
    carbonbadge: {
      render: component("./src/components/WebCarbonBadge.astro"),
      selfClosing: true,
    },
  },
});
