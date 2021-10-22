<template>
  <component :is="curPage"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { curPage } from './dataCenter/globalState';
import HelloWorld from './components/HelloWorld.vue';
import Template from './components/Template.vue';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Template,
  },
  setup() {
    return {
      curPage,
    };
  },
});
</script>
