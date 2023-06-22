const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]
// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = constants
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,...count] = countries
console.log(fin,est,count) 

//3 . Destructure the rectangle object by its properties or keys.
let {...properties} = rectangle
console.log(Object.keys(properties))


// exercise level 2 
// iterate through the users array and get all the keys of the object using  destructuring 
for (const user of users) {
  const {...keys} = user
  console.log(Object.keys(keys))
}

// find the person who have less than two skills 

for (const user of users) {
  const {skills} = user;
  if (skills && skills.length < 2) {
    console.log(user);
  }
}

// exercise level 3 

// 1. Destructure the countries object print name, capital, population and languages of all countries
