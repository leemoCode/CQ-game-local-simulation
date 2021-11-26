const solution = (n) => {
  let curItem = 1; // 当前遍历小组的元素
  let curItemNum = 1; // 当前元素的个数
  let curResult = [1];
  for (let j = 1; j < n; j++) {
    let arr = [];
    for (let i = 0; i < curResult.length; i++) {
      if (curResult[i - 1] && curResult[i - 1] === curResult[i]) {
        curItemNum += 1;
      } else {
        arr.push(curItemNum);
        arr.push(curItem);
      }
    }
    curResult = arr;
  }

  console.log(curResult);
};

solution(3);
