<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "MyContainer"
}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    padding-top: 60px;
    margin: 0 auto;
    min-height: 50rem;

    @media (max-width: 480px) {
        padding-top: 40px;
    }
}
</style>
