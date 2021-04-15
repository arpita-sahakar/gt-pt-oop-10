const Arithmetic = require("./arithmetic");

// const value = new Arithmetic(4)
//   .plus(8)
//   .plus(15)
//   .minus(16)
//   .minus(23)
//   .plus(42)
//   .plus(108)
//   .value();

const value = new Arithmetic(4);
value.plus(8);
value.plus(15);
value.minus(16);
value.minus(23);
value.plus(42);
value.plus(108);
value.value();


console.log(value);
