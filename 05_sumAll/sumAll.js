// MY SOLUTION
const sumAll = function(startIndex, endIndex) {
    let sum = 0;
    if(typeof(startIndex) !== "number" || typeof(endIndex) !== "number" 
    || (startIndex < 0 || endIndex < 0)){
        return "ERROR" 
    } else if(startIndex<endIndex){
        for (i=startIndex; i<=endIndex; i++){
            sum +=i;
        }
    }else{
        for (i=endIndex; i<=startIndex; i++){
            sum +=i;
        }
    }
    return sum;
};

// BETTER WAY OF DOING THIS
// const sumAll = function(min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//       const temp = min;
//       min = max;
//       max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//       sum += i;
//     }
//     return sum;
//   };

// Do not edit below this line
module.exports = sumAll;
