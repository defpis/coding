function merge(nums1, m, nums2, n) {
  let cursor = nums1.length - 1;
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[cursor] = nums1[i];
      i--;
    } else {
      nums1[cursor] = nums2[j];
      j--;
    }
    cursor--;
  }
  for (let k = 0; k <= j; k++) {
    nums1[k] = nums2[k];
  }
  return nums1;
}

module.exports = merge;
