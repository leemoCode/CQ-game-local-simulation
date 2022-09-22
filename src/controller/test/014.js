function l_014(strs) {
  // 输入：strs = ["flower", "flow", "flight"]
  // 输出："fl"
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    let curStr = strs[0][i];
    let tag = 1;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== curStr) {
        tag = 0;
      }
    }

    if (tag) {
      res += curStr;
    } else {
      break;
    }
  }
  return res || ''
};


console.log(l_014_1(["cir", "car"]))

function l_014_1(strs) {
  let curRes = strs[0];


  for (const item of strs) {
    let i = 0;

    for (; i < item.length; i++) {
      if (curRes[i] !== item[i]) {
        break;
      }
    }

    curRes = curRes.slice(0, i);
  }

  return curRes;
}
