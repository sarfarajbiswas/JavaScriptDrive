

//arrays
const arrItems = ['Item 1', 'Item 2', 'item 3'];

console.log(arrItems.length);
console.log(arrItems[0]);
console.log(arrItems);
console.log(arrItems.length - 1);


//multiple data types
const arrItems2 = ['Item 1', 'Item 2', 'item 3', 56, true];

console.log(arrItems2);

//for in loop
const arrItemsTmp = ['Item 1', 'Item 2', 'item 3'];

for(let elementIndex in arrItemsTmp){
    console.log(elementIndex);
}

//for of loop
for(let element of arrItemsTmp){
    console.log(element);
}

//for each
arrItemsTmp.forEach(function(element, index){
    console.log(`data: ${element}, index: ${index}`);
});

arrItemsTmp.forEach((element, index) =>
    console.log(`data: ${element}, index: ${index}`)
);


//indexOf
console.log(`indexOf: ${arrItemsTmp.indexOf('Item 2')}`)

//CRUD
//push
let newCount = arrItemsTmp.push('Item push');
console.log(arrItemsTmp);

//unshift
newCount = arrItemsTmp.unshift('Item unshift');
console.log(arrItemsTmp);

//pop - will remove the last item
arrItemsTmp.pop();
console.log(arrItemsTmp);

//shift -- will remove first element
arrItemsTmp.shift();
console.log(arrItemsTmp);

//splice
const arrItemsTmp2 = ['Item 1', 'Item 2', 'item 3'];
arrItemsTmp2.splice(arrItemsTmp2.length, 0, 'Item 4');
console.log(arrItemsTmp2);
arrItemsTmp2.splice(arrItemsTmp2.length - 1, 1);
console.log(arrItemsTmp2);

const indexOfItem2 = arrItemsTmp2.indexOf("Item 2");
if(indexOfItem2 != -1){
    arrItemsTmp2.splice(indexOfItem2, 1, 'Item 22');
}
console.log(arrItemsTmp2);


//map, reduce, filter
const arrMapItems = ['Item 1', 'Item 2', 'item 3', 'item 3'];
const returnVal = arrItems.map((element, index, arr) => (`Map data ${index}. ${element}`));
console.log(returnVal);

const returnValForEach = arrItems.forEach((element, index, arr) => (`Map data ${index}. ${element}`));
console.log(returnValForEach);

const arrNumItems = [25, 36, 49, 64, 81, 100];
let arrSqr = arrNumItems.map((element, index)=> Math.sqrt(element)).filter((element, index) => element > 5);
console.log(arrSqr);
 

let sumData = arrNumItems.map((element, index)=> Math.sqrt(element)).filter((element, index) => element > 5).reduce((accumulator, el) => accumulator + el);
console.log(sumData);

let initialVal = 10;
let sum = arrNumItems.reduce((accumulator, el, index, arr) => accumulator + el, initialVal);
console.log(sum);

//2d array to single d array
let arr2D = [["1", "2"], ["3", "4"], ["5", "6"]];
let flatArr = arr2D.reduce((accum, el)=> accum.concat(el));
console.log(flatArr);
