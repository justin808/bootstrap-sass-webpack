var pathToBootstrapSass = path.resolve(__dirname, "./node_modules/bootstrap-sass");
console.log("pathToBootstrapSass is " + pathToBootstrapSass);
require("style!css!sass?includePaths[]=" + pathToBootstrapSass + "!./bootstrap-sass-styles!./bootstrap-sass.config.js");
require("./bootstrap-sass-scripts!./bootstrap-sass.config.js");
