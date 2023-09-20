<template>
    <div class="card-container">
        <pv-card class="sign-in-card">
            <template #title> {{$t("Sign up to UPDate")}} </template>
            <template #content>
                <div class="form-fields">
                    <div class="form-grid grid">

                        <!--FIELD: E-mail-->
                        <div class="field col">
                            <label for="email" class="block">{{ $t("Email") }}</label>
                            <pv-input-text v-model="email" id="email" type="text" class="w-full" aria-labelledby="email"></pv-input-text>
                        </div>

                        <!--FIELD: Username-->
                        <div class="field col">
                            <label for="username" class="block">{{ $t("Username") }}</label>
                            <pv-input-text v-model="username" id="username" type="text" class="w-full" aria-labelledby="username"></pv-input-text>
                        </div>
                    </div>

                    <div class="form-grid grid">
                        <!--FIELD: Password-->
                        <div class="field col">
                            <label for="password" class="block mt-1">{{ $t("Password") }}</label>
                            <pv-password v-model="password" id="password" :toggle-mask="true" :feedback="true" class="w-full" input-class="w-full" aria-labelledby="password">
                                <template #footer>
                                    <p class="text-500 text-s font-medium mb-2">{{ $t("Suggestions") }}</p>
                                    <Divider />
                                    <ul class="pl-2 ml-2 mt-0 text-s" style="line-height: 1.3">
                                        <li>{{ $t("At least one lowercase") }}</li>
                                        <li>{{ $t("At least one uppercase") }}</li>
                                        <li>{{ $t("At least one special character") }}</li>
                                        <li>{{ $t("At least one numeric") }}</li>
                                        <li>{{ $t("At least 8 characters") }}</li>
                                    </ul>
                                </template>
                            </pv-password>
                        </div>

                        <!--FIELD: Confirm Password-->
                        <div class="field col">
                            <label for="confirm_password" class="block mt-1">{{ $t("ConfirmPassword") }}</label>
                            <pv-password v-model="confirm_password" id="confirm_password" :toggle-mask="true" :feedback="true" class="w-full" input-class="w-full" aria-labelledby="confirm_password">
                                <template #content>
                                    <div
                                        v-if="passwordMatches && password != null"
                                        class="flex align-items-center"
                                    >
                                        <i class="pi pi-check mr-2"></i>
                                        <p class="">{{ $t("The passwords match") }}.</p>
                                    </div>
                                    <div
                                        v-else-if="!passwordMatches && password != null"
                                        class="flex align-items-center"
                                    >
                                        <i class="pi pi-times mr-2 p-error"></i>
                                        <p class="p-error">{{ $t("Passwords do not match") }}.</p>
                                    </div>
                                </template>
                            </pv-password>
                        </div>
                    </div>

                    <!--FIELD: Birthday-->
                    <div class="date_selector">
                        <label for="birthday" class="block mt-1 mb-2">{{ $t("Birthday") }}</label>
                        <div></div>
                        <pv-calendar v-model="birthday" id="birthday" date-format="dd/mm/yy" aria-labelledby="birthday" touch-u-i />
                    </div>
                </div>

                <!--BUTTON: Sign up-->
                <div class="button-container">
                    <pv-button type="submit" label="Sign up" class="w-full mt-3"></pv-button>
                </div>
            </template>
            <template #footer>
                {{ $t("Already have an account") }} <router-link to="/login">{{ $t("LogIn") }}</router-link>.
            </template>
        </pv-card>
    </div>
</template>

<script>
export default {
    name: "signup.component",
    data() {
        return {
            email: '',
            username: '',
            password: '',
            confirm_password: '',
            birthday: '',
        }
    },
    computed: {
        passwordMatches() {
            return this.password === this.confirm_password;
        },
    },
}
</script>

<style scoped>
.card-container {
    margin: 0 auto;
    max-width: 900px;
    padding: 20px;
}

.date_selector {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
}

.button-container {
    display: grid;
    justify-content: center;
}
</style>