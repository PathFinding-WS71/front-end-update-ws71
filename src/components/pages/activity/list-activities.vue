<script>
import {ActivityService} from "@/services/activity.service";
import {LocationService} from "@/services/location.service";
import moment from "moment";
export default {
  name: "list-activities",
  data() {
    return {
      activityService: new ActivityService(),
      locationService: new LocationService(),
      activities: [],
      locations: [],
      layout: 'grid',
    }
  },
  mounted() {
    this.activityService.getActivities().then((response) => {
      this.activities = response.data;
      this.activities.forEach((activity) => {
        activity.activityDate = moment(activity.activityDate).format("dddd, D MMMM, YYYY");
      });

      const LocationPromises = this.activities.map((activity) => {
        return this.locationService.getLocationById(activity.locationId);
      });

      Promise.all(LocationPromises).then((locationResponse) => {
        this.locations = locationResponse.map((response) => response.data);

        this.activities.forEach((activity) => {
          const location = this.locations.find((location) => location.id === activity.locationId);
          activity.locationImageUrl = location ? location.locationImageUrl : "";
        });
      }).catch((error) => {
        console.log(error);
      });
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {

  }
}
</script>

<template>
  <div class="activity-list-card">
    <pv-data-view :value="activities" :layout="layout" :paginator="true" :rows="6" :totalRecords="activities.length">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">{{ $t('CurrentActivities') }}</span>
          <router-link to="new-activity">
            <pv-button icon="pi pi-plus" rounded raised />
          </router-link>
        </div>
      </template>
      <template #list="slotProps">
        <div class="col-12">
          <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
            <img class="activity-image" :src="slotProps.data.locationImageUrl" :alt="slotProps.data.activityTitle">
            <div class="flex flex-column sm:flex-row justify-content-between align-items-start xl:align-items-start flex-1 gap-4">
              <div class="flex flex-column align-items-left sm:align-items-start gap-1">
                <div class="text-2xl font-bold text-900">{{ slotProps.data.activityTitle }}</div>
                <div class="text-lg text-500">{{ slotProps.data.activityDescription }}</div>
                <div class="flex align-items-center gap-3">
                  <span class="flex align-items-center gap-2">
                    <i class="pi pi-tag"></i>
                    <span class="font-semibold">{{ slotProps.data.activityType }}</span>
                  </span>
                </div>
              </div>
              <div class="flex sm:flex-column align-items-center sm:align-items-end gap-2 sm:gap-2">
                <span class="text-l font-semibold">{{ slotProps.data.activityDate }}</span>
                <pv-button rounded label="I'll assit!" severity="warning" :disabled="slotProps.data.isActive === false" />
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #grid="slotProps">
        <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
          <div class="p-4 border-1 surface-border surface-card border-round">
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
              <div class="flex align-items-center gap-2">
                <i class="pi pi-tag"></i>
                <span class="font-semibold">{{ slotProps.data.activityType }}</span>
              </div>
            </div>
            <div class="flex flex-column align-items-center gap-3 py-5">
              <img class="activity-image" :src="slotProps.data.locationImageUrl" :alt="slotProps.data.activityTitle">
              <div class="text-2xl font-bold text-900">{{ slotProps.data.activityTitle }}</div>
              <div class="text-lg text-500">{{ slotProps.data.activityDescription }}</div>
            </div>
            <div class="flex align-items-center justify-content-between">
              <span class="text-l font-semibold">{{ slotProps.data.activityDate }}</span>
              <pv-button rounded label="I'll assit!" severity="warning" :disabled="slotProps.data.isActive === false" />
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
  </div>
</template>

<style scoped>
.activity-image{
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}
</style>