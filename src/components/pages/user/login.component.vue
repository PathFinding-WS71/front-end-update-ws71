<template>
  <form @submit.prevent="onLogin()">
    <div class="card-container">
      <pv-card class="login-card">
        <template #title> {{ $t("Sign in to UPDate") }}</template>
        <template #content>
          <div class="form-fields">
            <label for="username" class="block">{{ $t("Username") }}</label>
            <pv-input-text v-model="username" id="username" type="text" class="w-full"
                           aria-labelledby="username"></pv-input-text>

            <label for="password" class="block mt-3">{{ $t("Password") }}</label>
            <pv-password v-model="password" id="password" :toggle-mask="true" :feedback="false" class="w-full"
                         input-class="w-full" aria-labelledby="password"></pv-password>
          </div>
          <div class="button-container">
            <pv-button type="submit" label="Sign in" class="w-full mt-4"></pv-button>
          </div>
          <div class="error" v-if="errors.username">{{ errors.username }}</div>
          <div class="error" v-if="errors.password">{{ errors.password }}</div>

        </template>
        <template #footer>
          {{ $t("New to UPDate") }}
          <router-link to="/signup">{{ $t("Create an account") }}</router-link>
        </template>
      </pv-card>
    </div>
  </form>
</template>

<script>
import SignupValidations from "@/services/signup-validations";

export default {
  name: "login.component",
  data() {
    return {
      username: '',
      password: '',
      errors: [],
    }
  },
  methods: {
    onLogin() {
      let validations = new SignupValidations(
          this.username, this.password
      );

      this.errors = validations.checkValidations();
      if ('username' in this.errors || 'password' in this.errors) {
        return false;
      }


    }
  }
}
</script>

<style scoped>
.card-container {
  margin: 0 auto;
  max-width: 600px;
  padding: 20px;
}

div.error {
  color: red;
}
</style>