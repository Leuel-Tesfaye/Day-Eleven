// destructuring and spread 
// destructuring is a way to unpack arrays and objects and assigning to a distinct variable 
const numbers = [1,2,3,4,5]
let [numOne, numTwo, numThree, numFour,numFive] = numbers
console.log(numOne, numTwo, numThree, numFour, numFive)

// example two 
const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstName,secondName,thirdName, fourthName]= names
console.log(firstName,secondName,thirdName, fourthName)
//If we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index
const names2 =['Asabeneh', 'Brook', 'David', 'John']
let [,SecondName, ThirdName,FourthName]= names2
console.log(SecondName, ThirdName,FourthName)

// we can't assign a variable to all the elements in the array. we can destructure few of the first and we can get the remaining as array using the spread operator (...)

const num = [1,2,3,4,5,6,7,8,9,10]
let[numbOne, numbTwo, numbThree,...rest]= num

console.log(numbOne, numbTwo, numbThree)
console.log(rest)

const fruits = ['orange', 'apple','banana','avocado','pineapple','Mango']
let [... others]= fruits
// console.log(fOne,fTwo)
console.log(others)



