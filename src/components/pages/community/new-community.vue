<template>
  <pv-panel class="new-community-panel" :header="$t('NewCommunity')">
      <div class="p-field">
          <label for="community-name" class="label">{{$t('Name')}}: </label>
          <pv-input-text class="input" v-model="name" id="name" :placeholder="$t('Enter a name for your community')" aria-labelledby="Enter a name for your community." />
      </div>

      <div class="p-field">
          <label for="community-description" class="label">{{$t('Description')}}: </label>
          <pv-text-area class="input" v-model="description" id="description" auto-resize rows="3" :placeholder="$t('Type a brief description for your community...')" />
      </div>

      <div class="p-field">
          <label for="community-visibility" class="label">{{$t('Visibility')}}: </label>
          <pv-dropdown class="input" v-model="selectedDrop" :options="dropOptions" :placeholder="$t(`Choose your community's privacy`)" aria-labelledby="Choose a category"/>
      </div>

      <div class="p-field">
          <label for="community-pfp" class="label">{{$t('Community Profile Picture')}}: </label>
          <pv-toast />
          <pv-file-upload name="demo[]" url="./upload.php" :multiple="false" accept="image/*" :max-file-size="1000000" />
      </div>

      <div class="button-container">
          <pv-button class="com-button" :label="$t('Create community')" />
      </div>

  </pv-panel>
</template>

<script>

export default {
    name: "new-community",
    data() {
        return {
            selectedDrop: null,
            dropOptions: ["Public", "Private", "Hidden"],
        }
    },
}
</script>

<style scoped>
.new-community-panel {
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
    width: 100%
}
</style>