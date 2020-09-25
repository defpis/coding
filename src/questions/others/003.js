/**
 * 校验IP地址
 * @param {String} ipStr IP字符串
 */
function checkIPv4(ipStr) {
  const ipArr = ipStr.split(".");

  if (ipArr.length !== 4) {
    return false;
  }

  for (let i = 0; i < 4; i++) {
    if (ipArr[i].length > 3) {
      return false;
    }
    if (ipArr[i] < "0" || ipArr[i] > "255") {
      return false;
    }
  }

  return true;
}
