const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let length = str.length;
  let head = '';
  let tail = '';
  let current;
  let max = 0;

  for (let i = 0; i < length; i++) {
    head = str.slice(0, i);
    tail = str.slice(i + 1, length);
    current = Number(`${head}${tail}`);
    if (max < current) max = current;
  }

  return max;
}

module.exports = {
  deleteDigit
};
