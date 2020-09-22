// 大数相加
function bigAdd(a, b) {
  a = a.split("");
  b = b.split("");

  let res = "";
  let c = 0;
  while (a.lenght || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res.replace(/^0+/g, "");
}

const res = bigAdd("123", "456");
console.log(res); // 579
