<template>
    <my-container>
        <div class="wrapper__form">
            <my-form>
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
                    placeholder="your password"
                />
                <my-checkbox>Keep me signed in</my-checkbox>
                <my-btn type="submit" @click.prevent="login">Sign In</my-btn>
            </my-form>
        </div>
    </my-container>
</template>

<script>

export default {
    name: "Login",
    components: {},
    data: () =>({
        user: {
            email: "",
            password: ""
        }
    }),
    methods: {
        login() {
            this.$store.dispatch('auth/loginUser', this.user)
        }
    }
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
