<template>
  <div>
    <my-header shownum="5"></my-header>
    <div id="bangdan">
     <my-Bdzj></my-Bdzj>
     <my-footer></my-footer>
  </div>
  </div>
</template>

<script>
import Bdzj from "@/components/bdzj/Bdzj.vue"
export default {
  components: {
    "my-Bdzj":Bdzj
    
  }
};
</script>

<style scoped="scoped">
#bangdan {
  margin-top: 81px;
  width: 100%;
  height: 100%;
}

</style>


