<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="footer-text">Copyright © 2023 PathFinding, inc. {{ $t('All rights reserved') }}.</p>
            <p class="footer-text"> Aplicaciones Web | SV54. </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: "footer.component"
}
</script>

<style scoped>
.footer {
    background-color: #f6f6f6;
    padding: 1rem;
    text-align: center;
    width: 100%;
    bottom: 0;
    left: 0;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
}

.footer-text {
    margin: 0;
    color: #6c757d;
}
</style>