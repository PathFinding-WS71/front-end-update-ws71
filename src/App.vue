<template>
  <router-view></router-view>
  <loader v-if="showLoader"></loader>
</template>

<script>
import {RouterView} from 'vue-router'
import Loader from "@/components/shared/loader.component.vue"
import {mapState} from "vuex";

export default {
  components: {
    RouterView,
    Loader,
  },
  computed: {
    ...mapState({
      showLoader: state => state.showLoader
    }),
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
}

main {
  margin-top: 185px;
  margin-bottom: 80px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
