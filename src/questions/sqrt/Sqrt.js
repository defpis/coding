function sqrt(number, deviation = 0.0000000001) {
  if (number < 0) {
    return -1;
  }

  let result = number;
  /*
  假设输入的数是 m，则其实是求一个 x 值，使其满足 x^2 = m，令 f(x) = x^2 - m ，其实就是求方程 f(x) = 0 的根。那么 f(x) 的导函数是 f'(x) = 2x。
  那么 f(x) 函数的曲线在 (xn，xn^2 - m) 处的切线的斜率是：2xn，因此切线方程是：y = 2xn (x - xn) + xn^2 - m。故切线与x轴的交点是：xn+1 = (xn + m / xn ) / 2
  */
  while (Math.abs(number - result * result) > deviation) {
    result = (number / result + result) / 2;
  }

  return result;
}

module.exports = sqrt;
