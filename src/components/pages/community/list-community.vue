<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <pv-data-view :value="communities" :layout="layout" :paginator="true" :rows="6" :totalRecords="communities.length">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Current communities</span>
          <router-link to="/new-community">
            <pv-button icon="pi pi-plus" rounded raised />
          </router-link>
        </div>
      </template>
      <template #list="slotProps">
        <div class="col-12">
          <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
            <div class="flex flex-column sm:flex-row justify-content-between align-items-start xl:align-items-start flex-1 gap-4">
              <div class="flex flex-column align-items-left sm:align-items-start gap-1">
                <div class="text-2xl font-bold text-900">{{ slotProps.data.communityName }}</div>
                <div class="text-lg text-500">{{ slotProps.data.communityDescription }}</div>
              </div>
              <div class="flex sm:flex-column align-items-center sm:align-items-end gap-2 sm:gap-2">
                <span class="text-l font-semibold">{{ slotProps.data.dateCreated }}</span>
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
            </div>
            <div class="flex flex-column align-items-center gap-3 py-5">
              <div class="text-2xl font-bold text-900">{{ slotProps.data.communityName }}</div>
              <div class="text-lg text-500">{{ slotProps.data.communityDescription }}</div>
            </div>
            <div class="flex align-items-center justify-content-between">
              <span class="text-l font-semibold">{{ slotProps.data.dateCreated }}</span>
              <pv-button rounded label="Join" severity="warning" :disabled="slotProps.data.isActive === false" />
            </div>
          </div>
        </div>
      </template>
    </pv-data-view>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import {CommunityService} from "@/services/community.service";
import Toolbar from "@/components/shared/toolbar.component.vue"
import Footer from "@/components/shared/footer.component.vue"
import moment from "moment";

export default {
  name: "list-communities",
  components: {Footer, Toolbar},
  data() {
    return {
      communityService: new CommunityService(),
      communities: [],
      layout: 'grid',
    }
  },
  mounted() {
    this.communityService.getCommunities().then((response) => {
      this.communities = response.data;
      this.communities.forEach((community) => {
        community.dateCreated = moment(community.dateCreated).format("dddd, D MMMM, YYYY");
      });
    }).catch((error) => {
      console.log(error);
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