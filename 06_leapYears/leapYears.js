// MY SOLUTION
const leapYears = function(_year) {
    const leapYear = Number(_year)
    if (leapYear % 100 === 0 && leapYear % 400 === 0) {
        return true;
    } else if(leapYear % 100 !== 0 && leapYear % 4 === 0){
        return true;
    }else{
        return false;
    }
};

// THEIR SOLUTION
// const leapYears = function(year) {
//     return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
//   };
// Do not edit below this line
module.exports = leapYears;
