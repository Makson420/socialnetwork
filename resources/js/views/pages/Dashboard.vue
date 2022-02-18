<template>
    <Header
        @logout="logout"
        :loggedIn="loggedIn"
    />
<div>

</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from "../../components/Header";
export default {
    name: "Dashboard",
    components: {Header},
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
