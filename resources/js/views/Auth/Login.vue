<template>
    <my-container>
        <div class="wrapper__form">
            <my-form>
                <my-label>Email</my-label>
                <my-input/>
                <my-label>Password</my-label>
                <my-input/>
                <my-checkbox>Keep me signed in</my-checkbox>
                <my-btn>Sign In</my-btn>
            </my-form>
        </div>
    </my-container>
</template>

<script>
import MyContainer from "../../components/UI/MyContainer";
export default {
    name: "Login",
    components: {MyContainer}
}
</script>

<style scoped lang="scss">
.wrapper__form {
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
