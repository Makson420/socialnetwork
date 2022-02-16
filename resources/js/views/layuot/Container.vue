<template>
<div class="container">
    <div class="wrapper__form">
        <my-form>
            <my-label>Name</my-label>
            <my-input/>
            <my-label>Email</my-label>
            <my-input/>
            <my-label>Password</my-label>
            <my-input/>
            <my-label>Confirm Password</my-label>
            <my-input/>
            <my-btn>Sign Up</my-btn>
        </my-form>

        <my-form>
            <my-label>Email</my-label>
            <my-input/>
            <my-label>Password</my-label>
            <my-input/>
            <my-checkbox>Keep me signed in</my-checkbox>
            <my-btn>Sign In</my-btn>
        </my-form>
    </div>

</div>

</template>

<script>




export default {
    name: "Container",
    components: {},
}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    padding-top: 60px;
    margin: 0 auto;
    min-height: 50rem;

    .wrapper__form {
        height: 90vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
