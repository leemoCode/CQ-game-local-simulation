<template>
  {{ a }}
  {{ b }}
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'Template',
  setup() {
    const a = ref(0);

    const b = computed(() => {
      return a.value ++;
    })
    return {
      a,
      b,
    };
  },
});
</script>
