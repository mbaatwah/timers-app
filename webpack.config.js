const createExpoWebpackConfigAsync = require('@expo/webpack-config');
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  if (env.mode === "development") {
    // config.plugins.push(
    //   new ReactRefreshWebpackPlugin()
    // );
  }
  return config;
};
