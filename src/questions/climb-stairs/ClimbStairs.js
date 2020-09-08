/*
// 方法一：自顶而下
function climbStairs(stairs) {
  const cache = {};
  function dp(n) {
    if (cache[n]) return cache[n];
    if (n <= 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    return (cache[n] = dp(n - 1) + dp(n - 2));
  }

  return dp(stairs);
}
*/

// 方法二：自底而上
function climbStairs(stairs) {
  if (stairs <= 0) return 0;
  const len = stairs + 1;
  const dp = new Array(len);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < len; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[stairs];
}

module.exports = climbStairs;
