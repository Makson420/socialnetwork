<template>
    <nav class="nav" id='nav'>
        <my-link @click="$router.push('/works')" >works</my-link>
        <my-link @click="$router.push('/about')" >about me</my-link>
        <my-link @click="$router.push('/skils')" >skills</my-link>
        <my-link  >contact</my-link>


    </nav>
</template>

<script>
export default {
    name: "MyNav"
}
</script>

<style scoped lang="scss">
.nav {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    height: 100%;
    -ms-flex-align: center;
    align-items: center;
}
.nav__link--btn {
    font-size: 0.93rem;
    padding: 10px 30px;
    border: 2px solid rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    transition: background-color
    .2s linear, color
    .2s linear;

}

.nav__link--btn:hover {
    background-color: rgba(255, 255, 255, 0.8);
    color: #2b2a2c;
    box-shadow: none;
}

@media (max-width: 767px) {


    .nav {
        display: none;
        width: 100%;
        height: auto;
        padding: 1rem;
        position: absolute;
        right: 0;
        top: 100%;
        z-index: 1000;
        background-color: rgba(43, 42, 44, 0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        text-align: center;
    }
}

.nav._active {
    display: -ms-flexbox;
    display: flex;
}


</style>
