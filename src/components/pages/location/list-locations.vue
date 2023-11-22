<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <div class="location-list-card">
      <pv-data-view :value="locations" :layout="layout" :paginator="true" :rows="6" :totalRecords="locations.length">
        <template #header>
          <div class="flex flex-wrap align-items-center justify-content-between gap-2">
            <span class="text-xl text-900 font-bold">{{ $t('CurrentLocations') }}</span>
            <router-link to="/new-location">
              <pv-button icon="pi pi-plus" rounded raised />
            </router-link>
          </div>
        </template>
        <template #list="slotProps">
          <div class="col-12">
            <div class="p-4 border-1 surface-border surface-card border-round">
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img class="location-image" :src="slotProps.data.locationImageUrl" :alt="slotProps.data.locationDescription">
                <div class="text-2xl font-bold text-900">{{ slotProps.data.locationDescription }}</div>
                <div class="text-lg text-500">{{ slotProps.data.locationAddress }}</div>
              </div>
            </div>
          </div>
        </template>
        <template #grid="slotProps">
          <div class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round">
              <div class="flex flex-wrap align-items-center justify-content-between gap-2">

                <span class="text-xl font-bold text-900">{{ slotProps.data.locationDescription }}</span>
              </div>
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img class="location-image" :src="slotProps.data.locationImageUrl" :alt="slotProps.data.locationDescription">
                <div class="text-lg text-500">{{ slotProps.data.locationAddress }}</div>
              </div>
            </div>
          </div>
        </template>
      </pv-data-view>
    </div>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import { LocationService } from "@/services/location.service";

import Toolbar from "@/components/shared/toolbar.component.vue";
import Footer from "@/components/shared/footer.component.vue";

export default {
  name: "list-locations",
  components: { Footer, Toolbar },
  data() {
    return {
      locationService: new LocationService(),
      locations: [],
      layout: 'grid',
    };
  },
  mounted() {
    this.locationService.getLocations()
        .then((response) => {
          this.locations = response.data;
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
  },
};
</script>

<style scoped>
.location-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 10px;
}

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
