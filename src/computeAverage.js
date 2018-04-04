function computeAverage(data) {
    return new Promise( (resolve, reject) => {
        // Average wait time for 0 clients is 0
        if (data.length < 1) {
            return resolve(0);
        }

        // Check if data has values with pereating orderTime  
        if (!validOrderTime(data)) {
            return reject("Incorrect input data. All customers have to have different order time");
        }

        let sum = 0;
        let timePassed = 0;

        // Array of remaining customers to serve, sorted by pizza cooking time
        let customersRemain = data.sort((a, b) => a.pizzaTime - b.pizzaTime).slice();

        // Preallocate vars for optimization
        let filtered = [];
        let nextCustomer = {};
        let customerIndex = 0;

        while (customersRemain.length > 0) {
            // Filter out customers that didn't order yet
            filtered = customersRemain.filter( cus => cus.orderTime <= timePassed );

            nextCustomer = filtered[0];

            timePassed += nextCustomer.pizzaTime;
            sum += timePassed - nextCustomer.orderTime;

            // Get index of the current customer
            customerIndex = customersRemain.findIndex( cus => cus.orderTime === nextCustomer.orderTime);

            // Remove current customer from the queue
            customersRemain.splice(customerIndex, 1);
        }

        const average = Math.floor(sum / data.length);

        return resolve(average);
    });
}

function validOrderTime(data) {
    let customer;

    for (customer of data) {
        if (data.filter( elem => elem.orderTime === customer.orderTime).length > 1) {
            return false;
        }
    }

    return true;
}

module.exports = computeAverage;