// function anagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let charCount1 = {};
//   let charCount2 = {};

//   for (let val of str1) {
//     charCount1[val] = (charCount1[val] || 0) + 1;
//     console.log(charCount1);
//   }

//   for (let val of str2) {
//     charCount2[val] = (charCount2[val] || 0) + 1;
//     console.log(charCount2);
//   }

//   for (let key in charCount1) {
//     if (!(key in charCount2)) {
//       return false;
//     }
//     if (charCount2[key] !== charCount1[key]) return false;
//   }
//   return true;
// }

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
    console.log(lookup);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    lookup[letter] ? (lookup[letter] -= 1) : false;
    console.log(lookup);
  }
  return true;
}

let results = anagram('rracr', 'rrrac');
console.log(results);
