// find the sum of alll the numbers of the array

let arr= [1,2,3,4,5,6,7,8,9];

// so to find the sum of all element we have to go through each element of the array
// add them in a new variable sum

// so lets create a new variable sum

let sum = 0;


// now we will traverse the array and add each element in sum variable
for (let index = 0; index < arr.length; index++) {
    sum = sum + arr[index];
}

// now we got the sum of each Element of an array

console.log("The sum of each element of the array is = " + sum);
