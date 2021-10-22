import { computed } from 'vue';

const url = window.location.href;
const routerList = ['HelloWorld'];

export const curPage = computed(() => {
  let res = 'HelloWorld';
  for (const item of routerList) {
    if (url.indexOf(item) !== -1) {
      res = item;
    }
  }

  return res;
});
