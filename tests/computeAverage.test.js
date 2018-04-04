const arrToStr = require("./misc");
const computeAvg = require("../src/computeAverage");

const emptyData = [];

const testData = [ { orderTime: 1, pizzaTime: 9 },
                   { orderTime: 0, pizzaTime: 3 },
                   { orderTime: 2, pizzaTime: 5 } ];

const testDataReordered = [ { orderTime: 0, pizzaTime: 3 },
                            { orderTime: 2, pizzaTime: 5 },
                            { orderTime: 1, pizzaTime: 9 } ];

const repeatingData = [ { orderTime: 1, pizzaTime: 9 },
                        { orderTime: 0, pizzaTime: 3 },
                        { orderTime: 1, pizzaTime: 5 } ];


test("Average with empty data  to equal 0", () => {
    computeAvg(emptyData).then( val => expect(val).toBe(0));
});

test(`Average with data ${arrToStr(testData)} to equal 8`, () => {
    computeAvg(testData).then( val => expect(val).toBe(8));
});

test(`Average with data ${arrToStr(testData)} to be equal to 
      the average with data ${arrToStr(testDataReordered)}`, () => {
    let test1 = 0;
    let test2 = 0;

    computeAvg(testData).then( val => { test1 = val; } );
    computeAvg(testDataReordered).then( val => { test2 = val; } );

    expect(test1).toBe(test2);
});

test(`Average with data ${arrToStr(repeatingData)} to reject with an error`, () => {
    expect(computeAvg(repeatingData)).rejects
            .toEqual("Incorrect input data. All customers have to have different order time");
});


