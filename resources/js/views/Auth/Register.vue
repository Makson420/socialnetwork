<template>
    <my-container>
        <div class="wrapper__form">
            <my-form>
                <my-label>Name</my-label>
                <my-input
                    type="text"
                    v-model="user.name"
                    placeholder="your name"
                />
                <my-label>Email</my-label>
                <my-input
                    type="text"
                    v-model="user.email"
                    placeholder="email address"
                />
                <my-label>Password</my-label>
                <my-input
                    type="number"
                    v-model="user.password"
                    placeholder="password"
                />
                <my-label>Confirm Password</my-label>
                <my-input
                    type="number"
                    v-model="user.password_confirmation"
                    placeholder="confirm password"
                />
                <my-btn>Register</my-btn>
            </my-form>
        </div>
    </my-container>
</template>

<script>

export default {
    name: "Register",
    components: {},
    data: () => ({
        user: {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
        }
    })
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
