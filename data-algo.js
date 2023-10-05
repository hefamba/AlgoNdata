function sumOfZero(arr) {
  let sorted = arr.sort((a, b) => {
    return a - b;
  });

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    let sum = sorted[left] + sorted[right];
    if (sum < 0) {
      left++;
    } else if (sum > 0) {
      right--;
    } else {
      return [sorted[left], sorted[right]];
    }
  }
  return 'nothing is zero';
}

let result = sumOfZero([-1, 10, 11, -2, 0, -4, -8]);
console.log(result);
