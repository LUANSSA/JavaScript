const array = [1, 2, 3, 4, 5];
console.log(array);
//[1, 2, 3, 4, 5]
console.log(array.map((item) => item *2));
//[2, 4, 6, 8, 10]
console.log(array);
//[1, 2, 3, 4, 5]
console.log(array.forEach((item) => item * 2));
//undefined
const array2 = array.forEach((item) => item *2);
console.log(array2);