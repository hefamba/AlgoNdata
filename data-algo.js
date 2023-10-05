function uniqueVal(arr) {
  let sorted = arr.sort((a, b) => a - b);

  let i = 0;
  for (let j = 1; j < sorted.length; j++) {
    if (sorted[i] !== sorted[j]) {
      i++;
      sorted[i] = sorted[j];
    }
  }
  return i + 1;
}

let result = uniqueVal([1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 88, 5, -9]);
console.log(result);
