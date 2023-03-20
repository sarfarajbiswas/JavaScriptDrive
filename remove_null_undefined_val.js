
const dummyObj = {
    field1: "JS",
    field2: null,
    field3:undefined,
    field4: 99,
};

console.log(dummyObj);

//remove null and undefined value

const filteredObj = Object.fromEntries(Object.entries(dummyObj).filter(([_, value]) => value != null));

console.log(filteredObj);