// https://leetcode.com/problems/contains-duplicate/submissions/1248879466

function containsDuplicate(nums) {
  nums.sort(); // this is for aligning same number togetehr

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}
