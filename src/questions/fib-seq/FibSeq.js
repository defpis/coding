/*
// 方法一：自顶而下
function helper(n, cache) {
  if (n === 1 || n === 2) return 1;
  if (cache[n]) return cache[n];
  return (cache[n] = helper(n - 1, cache) + helper(n - 2, cache));
}

function fibSeq(n) {
  if (n < 0) return 0;
  const cache = {};
  return helper(n, cache);
}
*/

// 方法二：自底而上
function fibSeq(n) {
  // 处理边缘情况
  if (n < 1) return 0;
  // 构造一个空数组
  const len = n + 1;
  const dp = new Array(len);
  // dp[0]空着不用
  dp[1] = dp[2] = 1;
  for (let i = 3; i < len; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

module.exports = fibSeq;
