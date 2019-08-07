<template>
  <div>
    <my-header shownum="1"></my-header>
    <div class="main">
      <my-Mind />
      <my-Mind1 />
      <my-Mind2 />
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Mind from "@/components/Mind.vue";
import Mind1 from "@/components/Mind1.vue";
import Mind2 from "@/components/Mind2.vue";
export default {
  components: {
    "my-Mind": Mind,
    "my-Mind1": Mind1,
    "my-Mind2": Mind2
  }
};
</script>

<style scoped="scoped">
.main {
  width: 1200px;
  height: 2036px;
  /* border: 1px solid red; */
  margin: 81px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
