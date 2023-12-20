var twoSum = function (nums, target) {
  let mp = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (diff in mp) {
      return [i, mp[diff]];
    }

    mp[nums[i]] = i;
  }
};
