// MY SOLUTION
const repeatString = function(str, num) {
    let repeat = ""
    let i = 0;
    do {
        if (num === 0) {
            repeat = repeat;
        } else if(num <= 0){
            repeat = "ERROR"
        }else {
            repeat += str;
        }
        i++;
    }while(i < num);
    return (repeat);
};
// ODIN SOLUTION
// const repeatString = function(word, times) {
//     if (times < 0) return 'ERROR'
//     let string = ''
//     for (let i = 0; i < times; i++) {
//       string += word
//     }
//     return string
//   };

// Do not edit below this line
module.exports = repeatString;
