<template>
  <router-view></router-view>
</template>

<script>
import {RouterView} from 'vue-router'
import {onBeforeMount} from "vue";
import {useStore} from "vuex";
export default {
  setup(){
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

  },
  components: {
    RouterView,
  },

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
