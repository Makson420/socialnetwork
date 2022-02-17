<template>
<div>
    <my-btn @click="logout" v-if="loggedIn">logout</my-btn>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name: "Dashboard",
    components: {},
    data: () => ({}),

    computed: {
        ...mapGetters({
            loggedIn: 'auth/loggedIn'
        })
    },
    methods: {
        ...mapActions({
            logout: 'auth/logout'
        })
    }
}
</script>

<style scoped>

</style>
