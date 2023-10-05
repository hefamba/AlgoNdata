function maxSubArray(arr, num) {
  if (arr.length < num) return null;
  let maxNum = 0;
  let tempNum = 0;

  for (let i = 0; i < num; i++) {
    maxNum += arr[i];
  }
  tempNum = maxNum;
  for (let i = num; i < arr.length; i++) {
    tempNum = tempNum - arr[i - num] + arr[i];
    maxNum = Math.max(maxNum, tempNum);
  }
  return maxNum;
}

let res = maxSubArray([1, 3, 22, 2, 22, 7, 4, 3, 2, 50, 1, 1, 9, 10], 3);
console.log(res);
