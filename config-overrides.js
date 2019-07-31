// const reactAppRewirePostcss = require('react-app-rewire-postcss');
// const postcssPresetEnv = require('postcss-preset-env');

// module.exports = config => reactAppRewirePostcss(config, {
//   plugins: () => [
//     postcssPresetEnv()
//   ]
// });

// module.exports = config => {
//   require('react-app-rewire-postcss')(config, {
//      plugins: loader => [
//       require('postcss-preset-env')({ stage: 0 })
//     ]
//   });

//   return config;
// }

// const PostCSSAssetsPlugin = require("postcss-assets-webpack-plugin");
// const PostCSSCustomProperties = require("postcss-custom-properties");

// module.exports = function(config) {
//     config.plugins.push(
//         new PostCSSAssetsPlugin({
//             test: /\.css$/,
//             log: false,
//             plugins: [PostCSSCustomProperties({ preserve: true })]
//         })
//     );
//     return config;
// };