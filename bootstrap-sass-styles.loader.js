var partials = [
  "mixins",

  "normalize",
  "print",

  "scaffolding",
  "type",
  "code",
  "grid",
  "tables",
  "forms",
  "buttons",

  "component-animations",
  "glyphicons",
  "dropdowns",
  "button-groups",
  "input-groups",
  "navs",
  "navbar",
  "breadcrumbs",
  "pagination",
  "pager",
  "labels",
  "badges",
  "jumbotron",
  "thumbnails",
  "alerts",
  "progress-bars",
  "media",
  "list-group",
  "panels",
  "wells",
  "close",

  "modals",
  "tooltip",
  "popovers",
  "carousel",

  "utilities",
  "responsive-utilities"
];
var path = require("path");
var pathToBootstrapSass = path.normalize(__dirname + "/../bootstrap-sass/assets");

module.exports = function (content) {
  this.cacheable(true);
  var config = this.exec(content, this.resourcePath);
  var start =
    "@import          \""+ pathToBootstrapSass + "/stylesheets/bootstrap/variables\";\n" +
    "$icon-font-path: \""+ pathToBootstrapSass + "/fonts/bootstrap\";\n" +
    "@import          \"./bootstrap.config.scss\";\n";
  source = start + partials.filter(function (partial) {
    return config.styles[partial];
  }).map(function (partial) {
    return "@import \""+ pathToBootstrapSass + "/stylesheets/bootstrap/" + partial + "\";";
  }).join("\n");
  return source;
}
