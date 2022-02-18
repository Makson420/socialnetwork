<template>
    <a  href="#" class="nav__link">
        <slot></slot>
    </a>
</template>

<script>
export default {
    name: "MyLink"
}
</script>

<style scoped lang="scss">
.nav__link {
    margin-right: 2rem;
    position: relative;
    font-size: 0.93rem;
    color: rgba(255, 255, 255, 0.8);
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
}

.nav__link:after {
    content: "";
    width: 0;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.8);
    position: absolute;
    bottom: -5px;
    left: 0;
    z-index: 1;
    transition: width .2s linear;
}

.nav__link:hover:after {
    width: 100%;
}

@media (max-width: 767px) {
    .nav__link:hover:not(.footer__nav-link):after {
        width: 0;
    }
    .nav__link:not(.footer__nav-link) {
        width: 100%;
        margin-right: 0;
        padding: .5rem 1rem;
    }
}

</style>
