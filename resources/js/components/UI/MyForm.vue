<template>
    <div class="frame">
        <div class="nav">
            <h2>Sign in</h2>
            <h2>Sign up</h2>
        </div>
        <form class="form" action="" method="post" name="form">
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
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    &.signin {
        height: 375px;
    }

    .nav {
        width: 100%;
        height: 85px;
        display: flex;
        justify-content: space-between;

        h2 {
            padding: 0 1rem;
            font-size: 2rem;
            margin-bottom: 0;

            &:hover {
                color: var(--color-primary-dark);
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
