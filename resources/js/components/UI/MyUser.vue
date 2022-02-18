<template>
    <div class="user">
        <div class="user__avatar">
            <img src="" alt="">
        </div>
        <div class="user__content">
            <div class="user__name">
                Maksym<br>Maksymenko
            </div>
            <div class="user__prof">
                Front end Developer
            </div>
        </div>
        <div class="loggs__wrapper">

            <div class="loggs">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "MyUser"
}
</script>

<style scoped lang="scss">
.user {
    display: -ms-flexbox;
    display: flex;
    cursor: pointer;
    position: relative;

    &:hover .loggs__wrapper {
        //height: 100%;
        display: block;
        transition:  .2s linear;
    }
}

.loggs__wrapper {
    //height: 0;
    display: none;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 100;
    transition: height .2s linear;
    background-color: rgba(43, 42, 44, 0.5);

    .loggs {
        padding: 1rem;
    }
}

.user__avatar {
    width: 57px;
    height: 57px;
}

.user__avatar img {
    width: 57px;
    height: 57px;
    border-radius: 50%;
}

.user__content {
    padding-left: 9px;
}

.user__name {
    font-size: 1.06rem;
    line-height: 1.2;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 700;
}

.user__prof {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.8);
}
</style>
