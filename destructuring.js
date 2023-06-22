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

// destructuring while iteration 

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}

// Spread operator to copy array

const even = [2,4,6,8,10]
const odd = [1,3,5,7,9]

let [...evenNum] = even
let [...oddNum] = odd
let wholeNumber = [...evenNum, ...oddNum]
console.log(evenNum)
console.log(oddNum)
console.log(wholeNumber)

// Spread operator to copy object
const user = {
    name : 'Prince',
    title : 'Front end developer',
    country : 'Finland',
    city : 'Ethiopia'
}
let users = {...user}
console.log(users)


