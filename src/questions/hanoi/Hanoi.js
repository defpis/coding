/**
 * 汉诺塔
 */
function hanoi(n, a, b, c) {
  if (n < 1) {
    throw new Error();
  } else if (n === 1) {
    console.log(`Move ${a} to ${c}`);
  } else {
    hanoi(n - 1, a, c, b);
    console.log(`Move ${a} to ${c}`);
    hanoi(n - 1, b, a, c);
  }
}

hanoi(3, "a", "b", "c");
