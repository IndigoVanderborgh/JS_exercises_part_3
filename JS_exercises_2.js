// How to check truth or false? we use boolean:

// let trueOfFalse = Boolean("hello")

// console.log(trueOfFalse)

//  try some challenges:
console.log(  Boolean("")   ) // false
console.log(  Boolean("0")  ) // true
console.log(  Boolean(100)  ) // true
console.log(  Boolean(null) ) // false
console.log(  Boolean([0])  ) // true the array takes precedence
console.log(  Boolean(-0)   ) // false, negatives and positives are unaffected in truth/false

// all we need to know is the 6 falsy statements in JS:
// false
// 0
// ""
// null
// undefined
// NaN