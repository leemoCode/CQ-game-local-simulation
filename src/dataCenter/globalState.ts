import { computed } from 'vue';

// need import the component name pushed just now in App.vue at the same time
const componentList = ['HelloWorld', 'Template', 'FlexBox'];

export const curPage = computed(() => {
  let res = 'HelloWorld';
  for (const item of componentList) {
    if (window.location.href.indexOf(item) !== -1) {
      res = item;
    }
  }

  console.log('Current page is: ', res);

  return res;
});
