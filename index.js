console.log("testing index.js");


// new array
const array = new Array(1,2,3);
console.log(array);

// using .fill
const arr = new Array(5).fill(0)

console.log(arr);


//includes or checking arrays

const arrayOfNumbers = [1,2,3];

//push
console.log(arrayOfNumbers.includes(2));
 arrayOfNumbers.push(7)


 //pop
console.log(arrayOfNumbers);
arrayOfNumbers.pop();

console.log(arrayOfNumbers);

console.log(typeof arrayOfNumbers);

// splice 

arrayOfNumbers.splice(1,2, "hello", "world");

console.log(arrayOfNumbers);

// concat

const arra = arrayOfNumbers.concat(["Diana", "Justus"]);

console.log(arra);

// reverse

array.reverse();
console.log(array);

// join

array.join(",  ")

console.log(array);

//Iterating through an array

for (let i = 0 ; i < array.length; i++){
    console.log(array[i]);
}

// continue looping

for (const value of array){
    console.log(value);
}


// forEach

array.forEach(function(value, index){
    console.log(value, index, array);
}, {num : 10});



// .map
console.log("==================");
let ar = [1,2,3]
console.log(ar); 

const mappedArray = ar.map(function(value, index ){
    return value + index + this.num;
}, {num: 10});

console.log(ar);

console.log(mappedArray);

// .filter 

console.log("/////////////////////////////");

const filteredArray = ar.filter(function(value, index, ar){
    return value > this.num
}, {num: 1
});

console.log(ar);

console.log(filteredArray);

// reduce 

console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
// const sum = ar.reduce(function(accumulator, currentValue, index, array){
//     return accumulator + currentValue;
// }, 0);

const sum = ar.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);

console.log(ar);
console.log(sum);

// sorting 

console.log(ar);
ar.push(9,8,7)
console.log(ar);
ar.sort()
console.log(ar);