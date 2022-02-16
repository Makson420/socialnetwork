<template>
    <input
        type="text"
        class="form-styling"
        :value="modelValue"
        @input="updateInput"
    >
</template>

<script>
export default {
    name: "MyInput",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped lang="scss">
.form-styling {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 20px;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    background: rgba(255,255,255,.2);

}

</style>
