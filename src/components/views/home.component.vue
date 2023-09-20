<template>
    <div class="home-banner grid grid-nogutter surface-section text-800">
        <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
            <section>
                <pv-card class="home-card-banner">
                    <template #header>
                        <p class="home-title-1">{{ $t("New experience") }}</p>
                        <p class="home-title-2">{{ $t("College life") }}</p>
                    </template>
                    <template #content>
                        <div class="description">
                            <p>{{ $t("Discover,Plan & Friends") }}</p>
                        </div>
                    </template>
                    <template #footer>
                        <router-link to="/login">
                            <pv-button label="Sign in" type="button" class="mr-3 p-button-raised"></pv-button>
                        </router-link>

                        <router-link to="/signup">
                            <pv-button label="Sign up" type="button" class="p-button-outlined"></pv-button>
                        </router-link>
                    </template>
                </pv-card>
            </section>
        </div>
        <div class="col-12 md:col-6 overflow-hidden">
            <img :src="CollegeFriendsImage" alt="Image" class="home-image md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
        </div>
    </div>
</template>

<script>
import CollegeFriendsImage from '@/assets/college-friends-hanging.jpg';
export default {
    name: "home.component",
    data() {
        return {
            CollegeFriendsImage,
        }
    },
}
</script>

<style scoped>
.home-banner {
    height: 25vh;
    min-height: 300px;
    max-height: 400px;
}

.home-card-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
}

.home-title-1 {
    font-size: clamp(40px, 2rem, 100px);
    font-weight: 700;
    margin-bottom: -40px;
}

.home-title-2 {
    font-size: clamp(40px, 2rem, 100px);
    font-weight: 700;
    margin-bottom: -20px;
}

.home-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>