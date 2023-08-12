const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "./src/shared/styles/functions.scss";
        @import "./src/shared/styles/variables.scss";
        @import "./src/shared/styles/mixins.scss";
        `,
      },
    },
  },
});
