<template>
  {{ msg }}
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { curPage } from './dataCenter/globalState';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'FlexBox',
  components: {
    // HelloWorld,
  },
  setup() {
    const msg = 'Component: FlexBox';
    return {
      msg,
    };
  },
});
</script>
