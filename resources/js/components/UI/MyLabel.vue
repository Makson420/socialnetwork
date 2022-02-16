<template>
<div class="label">
    <slot></slot>
</div>
</template>

<script>
export default {
    name: "MyLabel"
}
</script>

<style scoped lang="scss">
.label {
    padding-left: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--color-primary-dark);
    margin-bottom: 1.5rem;
}
</style>
