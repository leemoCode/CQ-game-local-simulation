const reverse = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]];
  }

  return s;
}


console.log(reverse(["h", "e", "l", "l", "o"]))
