//Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically and their corresponding values in the same order.

function keysAndValues(obj) {
    const keys = Object.keys(obj).sort();
    const value = [];
    for (const key in obj) {
        value.push(obj[key]);
    }
    return [keys,value]
}
const obj = {banana:1, apple:2, carrot:3};
const [keys,value] = keysAndValues(obj);
console.log(keys);
console.log(value);
