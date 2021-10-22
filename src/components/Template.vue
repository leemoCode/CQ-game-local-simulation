<template>
  {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { curPage } from './dataCenter/globalState';
// import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'Template',
  components: {
    // HelloWorld,
  },
  setup() {
    const msg = 'Component: Template';
    return {
      msg,
    };
  },
});
</script>
