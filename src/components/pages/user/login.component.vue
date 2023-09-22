<template>
  <form @submit.prevent="login">
    <div class="card-container">
      <pv-card class="login-card">
        <template #title> {{ $t("Sign in to UPDate") }}</template>
        <template #content>
          <div class="form-fields">
            <label for="email" class="block">{{ $t("Email") }}</label>
            <pv-input-text v-model="login_form.email" id="email" type="text" class="w-full"
                           aria-labelledby="email"></pv-input-text>

            <label for="password" class="block mt-3">{{ $t("Password") }}</label>
            <pv-password v-model="login_form.password" id="password" :toggle-mask="true" :feedback="false" class="w-full"
                         input-class="w-full" aria-labelledby="password"></pv-password>
          </div>
          <div class="button-container">
            <pv-button type="submit" label="Sign in" class="w-full mt-4"></pv-button>
          </div>
        </template>
        <template #footer>
          {{ $t("New to UPDate") }}
          <router-link class="signup" to="/signup">{{ $t("Create an account") }}</router-link>
        </template>
      </pv-card>
    </div>
  </form>
</template>

<script>
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "login",
  setup() {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }

    return {
      login_form,
      login
    }
  },
  data() {
    return {
      email: '',
      password: '',
      errors: [],
      error: '',
    }
  },

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

.signup:visited {
  color: mediumblue;
}

.signup {
  text-decoration: none;
  color: mediumblue;
}

.card-container {
  margin: 170px auto;
}
</style>