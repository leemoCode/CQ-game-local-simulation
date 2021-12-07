// https://leetcode-cn.com/problems/longest-palindromic-substring/
const solution = (str) => {
  if (str.length < 2) {
    return str;
  }

  let result = '';

  const findReverseStr = (a, b) => {
    while (a >= 0 && b < str.length && str.charAt(a) === str.charAt(b)) {
      a--;
      b++;
    }

    // core code
    if (b - a - 2 + 1 > result.length) {
      console.log('发现结果', a, b);
      result = str.slice(a + 1, b);
    }
  };

  for (let i = 0; i < str.length; i++) {
    findReverseStr(i, i);
    findReverseStr(i, i + 1);
  }

  console.log(result);

  return result;
};

solution('abbaija');
solution('aaabbaija');
