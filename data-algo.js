var isPalindrome = function (s) {
  // add regex method
  let str = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  console.log(str);

  // creating base case
  if (str.length === 1 || str.length === 0) return true;
  if (str.length === 2) {
    return s[0] === s[1];
  }

  // create recursive case
  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1, -1));
  }

  return false;
};

let res = isPalindrome('race a car');
console.log(res);
