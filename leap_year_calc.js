function checkLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)){
        return true;
    }

    return false;
}

console.log(`Year 1904 is leap year: ${checkLeapYear(1904)}`);
console.log(`Year 1994 is leap year: ${checkLeapYear(1994)}`);
console.log(`Year 2000 is leap year: ${checkLeapYear(2000)}`);
console.log(`Year 2004 is leap year: ${checkLeapYear(2004)}`);
console.log(`Year 2006 is leap year: ${checkLeapYear(2006)}`);
console.log(`Year 2012 is leap year: ${checkLeapYear(2012)}`);
console.log(`Year 2020 is leap year: ${checkLeapYear(2020)}`); 
console.log(`Year 2200 is leap year: ${checkLeapYear(2200)}`); 