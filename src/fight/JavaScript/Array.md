# sort方法
  直接调用arr.sort()
  按默认的排序方式：将每个数组元素toString()后按字符串Unicode编码顺序进行排序

  自定义排序规则：
  传入一个函数作为参数，参数必须是函数
  arr.sort(Fn)

  // 例 降序排序
  const sortFn = (a, b) => {
    return b - a;
  };
  执行sort方法时逐个比对a,b元素，当sortFn返回值为 true 或 >1 时，交换两个元素

  数组长度小于10时，采用插入排序；长度大于10，采用快排
  插入排序时间复杂度：最差On^2 最好On
  快排的时间复杂度Onlogn
