<template>
    <pv-toolbar class="toolbar-header">
        <template #start>
            <div class="logo-container">
                <img :src="LogoUPC" height="60" width="60"  alt="UPDate Logo"/>
                <h2 class="app-name">UPDate</h2>
            </div>
        </template>

        <template #end>
            <div class="button-container">
                <div v-if="isMobile" class="mobile-menu">
                    <pv-split-button
                        icon="pi pi-bars"
                        :model="menuItems"
                        class="mobile-menu-button"
                    ></pv-split-button>
                </div>
                <div v-else>
                    <router-link to="/home">
                        <pv-button icon="pi pi-home" label="Home" severity="help" class="mr-2" />
                    </router-link>
                    <router-link to="/new-community">
                        <pv-button icon="pi pi-users" label="Communities" severity="primary" class="mr-2" />
                    </router-link>
                    <router-link to="/list-activities">
                        <pv-button icon="pi pi-bolt" label="Activities" severity="warning" class="mr-2" />
                    </router-link>
                    <router-link to="/suscription">
                        <pv-button icon="pi pi-credit-card" label="Pricing" severity="success" class="mr-2" />
                    </router-link>
                </div>
            </div>
        </template>
    </pv-toolbar>
</template>

<script>
import LogoUPC from "@/assets/Logo UPC - color_bg.png";
export default {
    name: "toolbar.component",
    data() {
        return {
            isMobile: false,
            menuItems: [
                {
                    label: "Home",
                    icon: "pi pi-home",
                    command: () => this.navigateTo("/home")
                },
                {
                    label: "Communities",
                    icon: "pi pi-users",
                    command: () => this.navigateTo("/new-community")
                },
                {
                    label: "Activities",
                    icon: "pi pi-bolt",
                    command: () => this.navigateTo("/list-activities")
                },
                {
                    label: "Pricing",
                    icon: "pi pi-credit-card",
                    command: () => this.navigateTo("/suscription")
                }
            ],
            LogoUPC
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener("resize", this.checkMobile);
    },
    beforeUnmount() {
        window.removeEventListener("resize", this.checkMobile);
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 600;
        },
        navigateTo(route) {
            this.$router.push(route);
        }
    }
}
</script>

<style scoped>
.app-name {
    margin-left: 16px
}

.toolbar-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 600px) {
    .toolbar-header {
        flex-direction: row;
        justify-content: space-between;
    }
}

.logo-container {
    display: flex;
    align-items: center;
}

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8px;
}

@media only screen and (min-width: 600px) {
    .button-container {
        flex-direction: row;
        margin-top: 0;
    }
}

.button-container .mr-2 {
    margin-right: 8px;
}
</style>