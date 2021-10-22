<template>
  <div class="hello">
    <a
      href="https://github.com/leemoCode/play-with-code"
      target="_blank"
      rel="noopener"
      class="title"
      >this is a test page, project url</a
    >
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-size: 54px;
}
</style>
