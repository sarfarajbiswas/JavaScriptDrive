
const keyValuePairsArr = [
    ["key1", "Java Script"],
    ["key2", "Type Scripts"],
    ["key3", "Object"],
    ["key4", "Programming"],
];

console.log(keyValuePairsArr);

//object from key pairs array
const obj = Object.fromEntries(keyValuePairsArr);

console.log(obj);
