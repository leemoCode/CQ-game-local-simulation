const l_387 = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }

  return -1;
}


const l_387_1 = function (s) {
  const hash = {};
  for (const item of s) {
    hash[item] = (hash[item] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) {
      return i
    }
  }

  return -1;
}
