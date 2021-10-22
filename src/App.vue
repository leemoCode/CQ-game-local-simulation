<template>
  <component :is="curPage"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { curPage } from './dataCenter/globalState';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    return {
      curPage,
    };
  },
});
</script>
