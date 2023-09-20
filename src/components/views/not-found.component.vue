<template>
    <div class="error-container">
        <h1 aria-label="404 Error">404 Error</h1>
        <h1 aria-label="Page Not Found">Page Not Found. Please verify your path</h1>
        <div class="button-container">
            <router-link to="/login">
                <pv-button label="Home" aria-label="Go back to home" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "not-found.component"
}
</script>

<style scoped>
.error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>