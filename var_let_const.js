//var, let and const 

function showName(){
    var name = "Sarfaraj";
    let address = "Kolkata";

    console.log("name : " + name);
    console.log("address : " + address);

    if(true){
        let phone = "8017665566";

        console.log("phone : " + phone);

        //template literals
        console.log(` Name: ${name}, Address: ${address}, Phone : ${phone}`);
    }
    // console.log("phone : " + phone);
}

calc(40);

function calc(a, b=10){
    console.log(`Calculation: ${a+b}`);
}


showName();


//fat arrow function

const sum = ()=>{
    let num1 = 10;
    let num2 = 30;

    const sumVal = num1 + num2;

    console.log(`Sum: ${sumVal}`);
}

sum();

//single line statement
const sumArrow = ()=> `Sum: ${10 + 90}`;

console.log(sumArrow());