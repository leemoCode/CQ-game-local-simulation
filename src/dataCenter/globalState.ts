import { computed } from 'vue';

const url = window.location.href;
const componentList = ['HelloWorld', 'Template'];

export const curPage = computed(() => {
  let res = 'HelloWorld';
  for (const item of componentList) {
    if (url.indexOf(item) !== -1) {
      res = item;
    }
  }

  console.log('Current page is: ', res);

  return res;
});
