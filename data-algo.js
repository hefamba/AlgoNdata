var isAnagram = function (s, t) {
  let str = s.split('').sort().join('');
  let str2 = t.split('').sort().join('');
  console.log(str);
  console.log(str2);
  return str === str2;
};

let res = isAnagram('anagram', 'nagaram');
console.log(res);
