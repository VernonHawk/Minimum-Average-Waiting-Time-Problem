const readline = require("readline");

function readInput() {
    return new Promise( (resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        let input = "";
        
        rl.prompt();
        
        // Read input untill the stdin is closed
        rl.on("line", (line) => {  
            input += line + "\n";
            
            rl.prompt();
        }).on("close", () => {
            return resolve(input);
        });
    });
}

function parseInput(input) {
    return new Promise( (resolve, reject) => {
        // Split input in lines 
        const lines = input.split("\n");

        // Remove empty line at the end of the input
        lines.pop();

        const numOfCustomers = parseInt(lines[0]);

        // Lines without the first one
        const customers = lines.slice(1);

        // Return reject if number of customers isn't correct
        if (customers.length !== numOfCustomers) {
            return reject("Incorrect input data. Amount of customers has to be correct");
        }

        // Split data by spaces
        const splitCutomers = customers.map( line => line.split(" "));

        // Map customers to objects
        const objCustomers = splitCutomers.map( arr => ({ orderTime: parseInt(arr[0]), 
                                                            pizzaTime: parseInt(arr[1]) }) );
        
        return resolve(objCustomers);
    });
}

module.exports = {
    readInput,
    parseInput
};