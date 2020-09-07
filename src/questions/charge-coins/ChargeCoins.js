/*
// 方法一：自顶而下
function chargeCoins(coins, amount) {
  // 利用备忘录消除跳过子问题
  const cache = {};
  function dp(n) {
    // 查询备忘录
    if (cache[n]) return cache[n];
    // 处理边缘情况
    if (n === 0) return 0;
    if (n < 0) return -1;
    // 本次循环的最小值，初始设置为无穷大
    let res = Infinity;
    for (coin of coins) {
      const subproblem = dp(n - coin);
      // 如果子问题无解，跳过
      if (subproblem === -1) continue;
      // min{dp(n - coin_1), dp(n - coin_2), dp(n - coin_3), ...}
      res = Math.min(res, subproblem + 1);
    }
    // 缓存子问题计算结果
    cache[n] = res !== Infinity ? res : -1;
    return cache[n];
  }
  return dp(amount);
}
*/

// 方法二：自底而上
function chargeCoins(coins, amount) {
  // 设置一个 amount + 1 长度的数组
  const len = amount + 1;
  const dp = new Array(len).fill(Infinity);
  // 设置初始迭代状态
  dp[0] = 0;
  // 从 0 一直迭代到 amount 结束
  for (let i = 0; i < len; i++) {
    for (coin of coins) {
      if (i - coin < 0) continue;
      // 取不同 i - coin > 0 情况下的最小值
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] !== Infinity ? dp[amount] : -1;
}

module.exports = chargeCoins;
