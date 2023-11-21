<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <p>{{selectedActivity}}</p>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import Footer from "@/components/shared/footer.component.vue";
import Toolbar from "@/components/shared/toolbar.component.vue"
import {ActivityService} from "@/services/activity.service";
import {LocationService} from "@/services/location.service";

export default {
  name: "list-activities",
  components: {Toolbar, Footer},
  data() {
    return {
      activityService: new ActivityService(),
      locationService: new LocationService(),
      selectedActivity: {},
      location: {},
    };
  },
  mounted() {
    this.emitter.on('activity-selected', (activity) => {
      console.log("Received activity:", activity);
      this.selectedActivity = activity;
      console.log(this.selectedActivity.id);
      this.$nextTick(() => {
        console.log("Updated view with selected activity:", this.selectedActivity);
      });
    });
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
  margin-top: 110px;
  margin-bottom: 80px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>