<template>
    <div class="frame">
        <div class="nav">
            <router-link to="/login"><h2>Sign in</h2></router-link>
            <router-link to="/register"><h2>Sign up</h2></router-link>
        </div>
        <form class="form">
            <slot></slot>
        </form>
    </div>
</template>

<script>

export default {
    name: "MyForm",

}
</script>

<style scoped lang="scss">
.frame {
    //height: 575px;
    width: 430px;
    padding: 2rem;
    background:
        -webkit-linear-gradient(
                rgba(255,255,255,0.75),
                rgba(0,0,0,0.95)),
        no-repeat center center;
    background:
        linear-gradient(
                rgba(255,255,255,0.75),
                rgba(0,0,0,0.95)),
        no-repeat center center;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: var(--shadow-dark);
    overflow: hidden;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;


    .nav {
        width: 100%;
        height: 85px;
        display: flex;
        justify-content: space-between;

        a {
            color: var(--color-gray-dark-1);
            position: relative;
            order: 2;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;


            &:hover {
                color: var(--color-primary-dark);
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }



            &.router-link-active,
            &.router-link-exact-active {
                color: var(--color-primary-dark);
                cursor: pointer;
                order: 1;
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }

        }

        h2 {
            padding: 0 1rem;
            font-size: 2rem;
            margin-bottom: 0;
            -webkit-transition: all .2s ease;
            transition: all .2s ease;

            &:hover {
                color: var(--color-primary-dark);
                -webkit-transition: all .2s ease;
                transition: all .2s ease;
            }
        }

    }
    .form {
        display: flex;
        flex-direction: column;
    }

    @media (max-width: 480px) {
        width: 90%;
        margin: 0 auto;
    }
}
</style>
