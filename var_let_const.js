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

showName();

// console.log("name : " + name);