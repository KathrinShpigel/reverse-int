module.exports = function reverse (n) {
  return n && typeof(n) === 'number' ? String(Math.abs(n)).split('').reverse().join('') : 0;
}
