function countCharacters(str) {
  const charCount = {};
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const result = countCharacters("hello");
console.log(result); // Output: { h: 1, e: 1, l: 2, o: 1 }
