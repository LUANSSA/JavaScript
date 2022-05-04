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


const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}

//Usando map com this
function mapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2]; 
console.log("Quando this é maça: ", mapComThis(nums, maca));
//Quando this é maça:  [ 2, 4 ]
console.log("Quando this pe laranka: ", mapComThis(nums, laranja));
//Quando this pe laranka:  [ 3, 6 ]

//Uando map sem this
function mapSemThis(arr){
    return arr.map(function(item){
      return item *2;  
    });
}

const nums2 = [2, 4, 6, 8, 10];
console.log("array nums2: ", nums2);
console.log("Map sem this: ", mapSemThis(nums2));
