<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <my-user>
                    <my-btn @click="$emit('logout')" >logout</my-btn>
                </my-user>
                <my-nav
                    @showModal="showModal"
                />

                <div class="burger">
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<script>


export default {
    name: "My-header",
    data: () => {
        return {
            modalVisible: false,
        }
    },
    props: [],
    methods: {
        showModal() {
            this.modalVisible = true ;
        },
    }

}
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.header {
    padding: 1.2rem 0;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background-color: rgba(43, 42, 44, 0.5);
}

@media (max-width: 767px) {
    .header {
        background-color: rgba(43, 42, 44, 0.7);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
}

.header__inner {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center;
}





.burger {
    display: none;
    border: none;
    padding: 0;
    background: transparent;

}

@media (max-width: 767px) {
    .burger {
        display: block;
        z-index: 1000;
        position: relative;
        width: 30px;
        height: 18px;
        cursor: pointer;

    }
    .burger span,
    .burger::before,
    .burger::after {
        left: 0;
        position: absolute;
        height: 10%;
        width: 100%;
        transition: all .3s ease 0s;
        background-color: rgba(255, 255, 255, 0.8);
    }
    .burger::before{
        content: "";
        top: 0;
    }
    .burger::after{
        content: "";
        bottom: 0;
    }
    .burger span{
        top: 50%;
        transform: scale(1) translateY(-50%);
    }
    .burger._active span {
        transform: scale(0) translateY(-50%);
    }
    .burger._active::before {
        top: 50%;
        transform: rotate(-45deg) translate(0px, -50%);
    }
    .burger._active::after {
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
}

</style>
