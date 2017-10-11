"use strict";

var _babelCore = require("babel-core");

var babel = _interopRequireWildcard(_babelCore);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var options = {
    sourceMap: true,
    compact: false
};

babel.transformFile(__dirname + "/Person.js", options, function (err, result) {
    var map = result.map;
    delete map.sourcesContent;
    console.log(map);
    console.log("=====");
    console.log(result.code);
});