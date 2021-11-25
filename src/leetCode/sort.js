const arr = [1, 2, 3, 5, 6, 7];

const sortFn = (a, b) => {
  return b - a;
};

const sortArr = arr.sort(sortFn);
console.log(sortArr);
