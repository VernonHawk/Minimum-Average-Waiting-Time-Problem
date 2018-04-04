const arrToStr = require("./misc");
const { parseInput } = require("../src/handleInput");

const testData = "3\n2 6\n0 3\n1 9\n ";
const testResult = [ { orderTime: 2, pizzaTime: 6 },
                     { orderTime: 0, pizzaTime: 3 },
                     { orderTime: 1, pizzaTime: 9 } ];

const incorrectData = "2\n2 6\n0 3\n1 9\n ";

test(`Parsed data ${testData} has to be equal to ${arrToStr(testResult)}`, () => {
    parseInput(testData).then( val => expect(val).toEqual(testResult));
});

test(`Trying to parse data ${incorrectData} has to reject with an error`, () => {
    expect(parseInput(incorrectData)).rejects
        .toEqual("Incorrect input data. Amount of customers has to be correct");
});
