const { withNativeWind } = require("nativewind/metro");
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname, { isCSSEnabled: true });

module.exports = withNativeWind(config, { input: "./global.css" });
