function stringifyArrayOfObj(arr) {
    return arr.map( obj => JSON.stringify(obj)).toString();
}

module.exports = stringifyArrayOfObj;