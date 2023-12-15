var mergeAlternately = function (word1, word2) {
  let i = 0;
  let j = 0;
  let str = [];

  while (i < word1.length && j < word2.length) {
    str.push(word1[i]);
    str.push(word2[j]);
    i++;
    j++;
  }
  console.log(str);

  return str.join('');
};

let done = mergeAlternately('abc', 'pqr');
console.log(done);

return -1;
