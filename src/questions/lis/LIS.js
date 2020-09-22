/**
 * 获取最长上升子序列的长度
 * @param {Array} arr 输入数组
 */
function getLISLen(arr) {
  const len = arr.length;
  const dp = new Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

/**
 * 获取最长上升子序列
 * @param {Array} arr 输入数组
 */
function getLIS(arr) {
  const len = arr.length;
  // 使用Array.fill([])会导致引用同一个数组对象
  const dp = [...new Array(len)].map((_, index) => [arr[index]]);

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > Math.max(...dp[j])) {
        dp[j].push(arr[i]);
      }
    }
  }

  const lenMap = dp.map((item) => item.length);
  return dp[lenMap.findIndex((v) => v === Math.max(...lenMap))];
}

module.exports = {
  getLISLen,
  getLIS,
};
