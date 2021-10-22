import { ref } from 'vue';

const url = window.location.href;
const routerList = ['HelloWorld'];

const setCurPage = () => {
  let res = 'HelloWorld';
  for (const item of routerList) {
    if (url.indexOf(item) !== -1) {
      res = item;
    }
  }

  return res;
};

export const curPage = ref(setCurPage());
