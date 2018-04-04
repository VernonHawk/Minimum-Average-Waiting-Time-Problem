const computeAvg = require("./computeAverage");
const { readInput, parseInput } = require("./handleInput");

function main() {
    readInput()
        .then( input => parseInput(input) )
        .then( data => computeAvg(data) )
        .then( avg => console.log("Result:", avg) )
        .catch( err => console.error("Error:", err) );
}

main();

module.exports = main;