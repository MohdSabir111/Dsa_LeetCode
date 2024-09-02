```js

let person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// return an array of kyes 
let keys = Object.keys(person);
console.log(keys)
   //Output: [ 'name', 'age', 'city' ]


//return an array of values
let values = Object.values(person);
console.log(values);
//   [ 'John', 30, 'New York' ]

//return an array of [key, values] pairs
let entries = Object.entries(person);
console.log(entries);
//   [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]

let name = person.hasOwnProperty('age');
console.log(name);

```


## forEach : 
  **Purpose:** forEach() is a non-returning method that is useful for operations that don't require producing a new value or modifying the array itself.

 **Non-Chainable:** Because forEach() returns undefined, you cannot chain other array methods directly after it, unlike methods such as map(), filter(), or reduce().

```js
array.forEach(function(element, index, array) {
  // Your logic here
});
```

- element: The current element being processed in the array.
- index: The index of the current element.
- array: The array that forEach is iterating over.
