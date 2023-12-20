var topKFrequent = function (nums, k) {
  if (nums.length === 0 || nums.length === 1) return nums;

  let count = {};
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let el = nums[i];
    if (!count[el]) {
      count[el] = 1;
    } else {
      count[el]++;
    }
  }

  let sorted = Object.keys(count).sort((a, b) => count[b] - count[a]);

  for (let i = 0; i < k; i++) {
    res.push(sorted[i]);
  }

  return res;
};
