<template>
  <header>
    <Toolbar></Toolbar>
  </header>
  <main>
    <pv-panel class="new-location-panel" :header="$t('NewLocation')">
      <form class="location-form" @submit.prevent="handleSubmit">
        <div class="p-field">
          <label for="location-description" class="label">{{ $t('Description') }}</label>
          <pv-input-text class="input" v-model="description" id="description" :placeholder="$t('Enter a description for the location')"/>
        </div>

        <div class="p-field">
          <label for="location-address" class="label">{{ $t('Address') }}:</label>
          <pv-text-area class="input" v-model="address" id="location-address" auto-resize rows="3" :placeholder="$t('Enter the address')"/>
        </div>

        <div class="p-field">
          <label for="location-image" class="label">{{ $t('Image URL') }}</label>
          <input type="url" v-model="imageURL" id="location-image" class="input" :placeholder="$t('Enter the URL of the image')"/>
        </div>

        <div class="button-container">
          <pv-button class="com-button" severity="primary" :label="$t('Create Location')" type="submit"/>
          <router-link to="/list-locations">
            <pv-button class="com-button" severity="danger" outlined :label="$t('Cancel')"/>
          </router-link>
        </div>
      </form>
    </pv-panel>
  </main>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import { LocationService } from "@/services/location.service";
import Footer from "@/components/shared/footer.component.vue";
import Toolbar from "@/components/shared/toolbar.component.vue";

export default {
  name: "new-location.vue",
  components: { Toolbar, Footer },
  data() {
    return {
      description: "",
      address: "",
      imageURL: "",
      locationservice: new LocationService(),
    };
  },
  methods: {
    async handleSubmit() {
      const locationData = {
        locationDescription: this.description,
        locationAddress: this.address,
        locationImageUrl: this.imageURL,
      };

      try {
        const response = await this.locationservice.postLocation(locationData);
        console.log("Location created:", response.data);


        this.$router.push('/list-locations');
      } catch (error) {
        console.error("Error creating location:", error);
      }
    },
  },
};
</script>

<style scoped>
.location-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 700px;
  margin: 0 auto;
}

.label {
  font-weight: bold;
  margin-bottom: 5px;
}

.input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}


#location-image {
  margin-top: 5px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.button-container .com-button {
  margin: 0 10px;
}


.label, #description, #location-address {
  font-weight: bold;
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
  margin-top: 130px;
  margin-bottom: 80px;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
