const CracoAlias = require("craco-alias");
const { when, whenTest } = require("@craco/craco");

module.exports = {
  // Tailwind configurations
  style: {
    postOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },

  // Typescript Alias Configuration
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        baseUrl: "./src",
        source: "tsconfig",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
