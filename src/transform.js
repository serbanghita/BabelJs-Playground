import * as babel from "babel-core";

let options = {
    sourceMap: true,
    compact: false
};

babel.transformFile(`${__dirname}/Person.js`, options, (err, result) => {
    let map = result.map;
    delete map.sourcesContent;
    console.log(map);
    console.log("=====");
    console.log(result.code);
});