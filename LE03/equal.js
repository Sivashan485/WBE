function equal(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
      return false;
    }

    for (let key of keysA) {
      if (!keysB.includes(key) || a[key] !== b[key]) {
        return false;
      }
    }

    return true;
  }

  return false;
}

module.exports = { equal };

console.log(equal(16, 16));
console.log(equal({a:1, b:2}, {c:3, b:2, a:1}));
console.log(equal("hi", "hi"));
console.log(equal({a:{}}, {a:{}}));
console.log(equal({}, {}));
