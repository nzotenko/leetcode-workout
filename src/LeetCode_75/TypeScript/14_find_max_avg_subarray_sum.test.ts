function findMaxAverage(nums: number[], k: number): number {
  let i = 0;
  let j = i + k - 1;

  let maxSum = 0;
  let sum = 0;

  while (j < nums.length) {
    if (i === 0) {
      sum = calcSum(nums.slice(i, k));
      maxSum = sum;
    } else {
      sum = sum - nums[i - 1] + nums[j];

      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    i++;
    j++;
  }

  return maxSum / k;
}

function calcSum(nums: number[]): number {
  return nums.reduce((a, b) => a + b);
}
