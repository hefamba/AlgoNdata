var longestCommonPrefix = function (strs) {
  // Assume the prefix is the first word in the array
  let pre = strs[0];
  console.log(pre);

  // Iterate through each word in the array
  for (let word of strs) {
    // Iterate through each character in the current word
    console.log(word);
    for (let i = pre.length - 1; i >= 0; i--) {
      // If the characters do not match, update the prefix by removing the differing characters
      if (pre[i] !== word[i]) {
        pre = pre.slice(0, i);
        console.log(pre);
      }
    }
  }

  // Return the final common prefix
  return console.log(pre);
};

let done = longestCommonPrefix(['flower', 'flow', 'flight']);
console.log(done);
