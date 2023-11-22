<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <img class="activity-image" :src="`${selectedActivity.locationImageUrl}`"
         :alt="`${selectedActivity.activityTitle}`">
    <div class="content">
      <h1>{{ selectedActivity.activityTitle }}</h1>
      <p>{{ selectedActivity.activityDescription }}</p>
      <br/>
      <p>Activity type: {{ selectedActivity.activityType }}</p>
      <p v-if="selectedActivity.activityType = 'Social'">This type of activity is usually made for going out with
        friends to do certain activities that don't required certain type of skill. Great for people without any plan.</p>
      <p v-else-if="selectedActivity.activityType = 'Sport'"></p>
      <div class="extra">
        <pv-fieldset legend="Extra info">
          <h5 class="m-0">
            Date: {{ selectedActivity.activityDate }}
          </h5>
          <br/>
          <h5 class="m-0">
            Address: {{ location.locationAddress }} ({{ location.locationDescription }})
          </h5>
        </pv-fieldset>
      </div>
      <br/>
      <pv-toast/>
      <pv-confirm-dialog></pv-confirm-dialog>
      <pv-button label="Join activity" icon="pi pi-check" iconPos="right" />
    </div>
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
import moment from "moment";

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
  created() {
    this.activityService.getActivityById(this.$route.params.id)
        .then((response) => {
          this.selectedActivity = response.data;
          this.selectedActivity.activityDate = moment(this.selectedActivity.activityDate).format("dddd, D MMMM, YYYY");

          return this.locationService.getLocationById(this.selectedActivity.locationId);
        })
        .then((response) => {
          this.location = response.data;
          this.selectedActivity.locationImageUrl = this.location.locationImageUrl;
          console.log(this.selectedActivity);
          console.log(this.location);
        })
        .catch((error) => {
          console.error("Error:", error);
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
  margin-top: 150px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activity-image {
  width: 50%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}

.content {
  align-self: start;
  padding: 1px 520px;
}

.extra {
  margin-top: 30px;

}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>