```js

let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// return an array of kyes 
let keys = Object.keys(person);
console.log(keys) //[ 'name', 'age', 'city' ]

//return an array of values
let values = Object.values(person);
console.log(values);

//return an array of [key, values] pairs
let entries = Object.entries(person);
console.log(entries);

let name = person.hasOwnProperty('age');
console.log(name);
```
