var isSubsequence = function (s, t) {
  if (t.length < s.length) return false;

  for (let i = 0; i <= t.length - s.length; i++) {
    let str = '';
    for (let j = 0; j < i - s.length; j++) {
      str += t[j];
    }
    console.log(str);

    if (str === s) {
      return true;
    }
  }
  return false;
};

let res = isSubsequence('abc', 'jfkabcld');
console.log(res);
