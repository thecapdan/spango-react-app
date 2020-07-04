const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@layout-header-background": "#fff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
