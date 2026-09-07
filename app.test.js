const test = require("node:test");
const assert = require("node:assert");
const { add, subtract, multiply, isEven } = require("./app");

test("add() adds two numbers", () => {
    assert.strictEqual(add(2, 3), 5);
});

test("subtract() subtracts two numbers", () => {
    assert.strictEqual(subtract(10, 4), 6);
});

test("multiply() multiplies two numbers", () => {
    assert.strictEqual(multiply(5, 4), 20);
});

test("isEven() detects even numbers", () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(5), false);
});