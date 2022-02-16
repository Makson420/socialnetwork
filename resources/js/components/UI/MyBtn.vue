<template>
<button class="btn">
    <slot></slot>
</button>
</template>

<script>
export default {
    name: "MyBtn"
}
</script>

<style scoped lang="scss">
.btn {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
    text-align: center;
    color: rgba(0,0,0, 1);
    padding: .5em .5em;
    width: 80%;
    margin: 2rem auto 2rem auto;
    border: none;
    border-radius: 20px;
    background-color: var(--color-gray-dark-1);
    -webkit-transition: all .2s ease, top .2s ease .2s, height .2s ease .2s, background-color .2s ease .35s;
    transition: all .2s ease, top .2s ease .2s, height .2s ease .2s, background-color .2s ease .35s;


    &:hover {
        cursor: pointer;
        background-color: var(--color-btn-hover-1);
        -webkit-transition: background-color .5s;
        transition: background-color .2s;
    }
}
</style>
