# 时间复杂度


# 欧几里得算法

  while (num !== 0) {
    reverseNum = (num % 10) + reverseNum * 10;

    num = Math.floor(num / 10);
  }
