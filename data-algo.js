var lengthOfLastWord = function (s) {
  let result = s.trim().split(' ');
  let last = result.length - 1;
  console.log(`index of ${last}`);
  return console.log(`length of ${result[last].length}`);
};

let done = lengthOfLastWord('Hello World all day boy');
console.log(done);
