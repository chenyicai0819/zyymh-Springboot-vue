<template>
  <div class="mainContent">
    <router-view/>
  </div>
</template>

<script>
import Shouye from "../mainContent/Shouye";
export default {
  name: 'MainContent',
  components: {Shouye}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContent{
  width:100%;
  background-color: gray;
}
</style>
