 // explaination -- 
 // charCount[char] = (charCount[char] || 0) + 1;
 //  here   charCount[char] is key   with the value  undefined 
 //  so on each iteration  we are setting the value of each key 
 //  { h : undefind, after 1 itration  it will become 1 
 //    e : undefined  after 2 iteration it will become 1
 //
 //    l : undefined  after 3 iteration it will become 1
 //    l : 1 , bcz it value was 1 so it will become 2
 //  }

function countCharacters(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
   }
  return charCount;
}

const result = countCharacters("hello");
console.log(result); // Output: { h: 1, e: 1, l: 2, o: 1 }
