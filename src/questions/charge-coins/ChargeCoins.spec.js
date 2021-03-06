const { expect } = require("chai");
const chargeCoins = require("./ChargeCoins");

const coins = [100, 50, 20, 10, 5, 2, 1];

describe("ChargeCoins", () => {
  it("charge 71", (done) => {
    expect(chargeCoins(coins, 71)).to.equal(3);
    done();
  });
  it("charge 0", (done) => {
    expect(chargeCoins(coins, 0)).to.equal(0);
    done();
  });
  it("charge 101", (done) => {
    expect(chargeCoins(coins, 101)).to.equal(2);
    done();
  });
});
