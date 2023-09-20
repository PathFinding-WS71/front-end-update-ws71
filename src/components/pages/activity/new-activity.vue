<template>
  <pv-panel class="new-activity-panel" :header="$t('NewActivity')">
    <form @submit="onSubmit" class="activity-form">
      <div class="p-field">
        <label for="activity-title" class="label">{{$t('Title')}}</label>
        <pv-input-text class="input" v-model="title" id="title" :placeholder="$t('Enter a title for the activity')" />
      </div>

      <div class="p-field">
        <label for="activity-description" class="label">{{$t('Description')}}:</label>
        <pv-text-area class="input" v-model="description" id="activity-description" auto-resize rows="3" :placeholder="$t('What is the activity about? Write a description')" />
      </div>

      <div class="p-field">
        <label for="activity-type" class="label">{{$t('Type')}}</label>
        <pv-dropdown class="input" v-model="selectedDrop" :options="dropOptions" :placeholder="$t('Select the activity type')" />
      </div>

      <div class="p-field">
        <label for="activity-date" class="label">{{$t('Date')}}</label>
        <pv-calendar class="input" v-model="date" id="activity-date" touch-u-i show-time hour-format="12" />
      </div>

      <div class="p-field">
        <label for="activity-location" class="label">{{$t('Location')}}</label>
        <pv-auto-complete class="input" id="activity-location" v-model="selectedLocation" optionLabel="locationDescription" :suggestions="filteredLocations" @complete="search" >
          <template #option="slotProps">
            <div class="flex align-options-center">
              <img :src="slotProps.option.locationImageUrl" :alt="slotProps.option.locationDescription" class="p-mr-2 img-option" />
              {{ slotProps.option.locationDescription }}
            </div>
          </template>
        </pv-auto-complete>
      </div>
    </form>

    <div class="button-container">
        <pv-button class="com-button" severity="primary" :label="$t('Create Activity')" @click="handleSubmit()" />
        <pv-button class="com-button" severity="danger" outlined :label="$t('Cancel')" />
    </div>

  </pv-panel>

</template>

<script>
import {LocationService} from "@/services/location.service";
import {ActivityService} from "@/services/activity.service";
export default {
  name: "new-activity.vue",
  data() {
    return {
      locationService: new LocationService(),
      activityService: new ActivityService(),
      title: "",
      description: "",
      selectedDrop: null,
      date: null,
      selectedLocation: null,
      dropOptions: ["Sport","Cultural","Social"],
      locations: [],
      filteredLocations: []
    }
  },
  mounted() {
    this.locationService.getLocations().then((response) => {
      this.locations = response.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    search(event) {
      setTimeout(() => {
        this.filteredLocations = this.locations.filter((location) => {
          return location.locationDescription.toLowerCase().startsWith(event.query.toLowerCase());
        });
      }, 250);
    },
    async handleSubmit() {
      const activity = {
        activityTitle: this.title,
        activityDescription: this.description,
        activityDate: this.date.toISOString(),
        activityType: this.selectedDrop,
        locationId: this.selectedLocation.id
      }
      await this.activityService.postActivity(activity);
    }
  }
}
</script>

<!-- Styling -->
<style scoped>
.new-activity-panel {
    max-width: 700px;
    margin: 0 auto;
}
.p-field {
    margin-bottom: 16px;
}
.button-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.button-container .com-button {
    margin: 0 10px;
}
.input {
    width: 100%;
}
.img-option {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
}
</style>