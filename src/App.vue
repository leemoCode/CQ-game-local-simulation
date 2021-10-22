<template>
  <component :is="curPage"></component>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const curPage = ref('HelloWorld');

    return {
      curPage,
    };
  },
});
</script>
