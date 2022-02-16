<template>
    <div class="wrapper__check">
        <input type="checkbox" id="checkbox"/>
        <label for="checkbox" ><span class="ui"></span>
            <slot></slot>
        </label>
    </div>
</template>

<script>
export default {
    name: "MyCheckbox"
}
</script>

<style scoped lang="scss">
.wrapper__check {
    width: 100%;
    margin: 1.5rem 0;

    label {
        font-size: 1.6rem;
    }

    [type="checkbox"]:not(:checked),
    [type="checkbox"]:checked {
        position: absolute;
        display: none;
    }

    [type="checkbox"]:not(:checked) + label,
    [type="checkbox"]:checked + label {
        position: relative;
        padding-left: 85px;
        padding-top: 2px;
        cursor: pointer;
        margin-top: 8px;
    }

    [type="checkbox"]:not(:checked) + label:before,
    [type="checkbox"]:checked + label:before,
    [type="checkbox"]:not(:checked) + label:after,
    [type="checkbox"]:checked + label:after {
        content: '';
        position: absolute;
    }

    [type="checkbox"]:not(:checked) + label:before,
    [type="checkbox"]:checked + label:before {
        width: 65px;
        height: 25px;
        background: rgba(255,255,255,.2);
        border-radius: 15px;
        left: 0;
        top: -3px;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    [type="checkbox"]:not(:checked) + label:after,
    [type="checkbox"]:checked + label:after {
        width: 10px;
        height: 10px;
        background: rgba(255,255,255,.7);
        border-radius: 50%;
        top: 50%;
        left: 10px;
        transform: translateY(-50%);
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    /* on checked */
    [type="checkbox"]:checked + label:before {
        background: #ffffff;
    }

    [type="checkbox"]:checked + label:after {
        background: var(--color-primary-dark);
        top: 50%;
        transform: translateY(-50%);
        left: 45px;
    }

    [type="checkbox"]:checked + label .ui,
    [type="checkbox"]:not(:checked) + label .ui:before,
    [type="checkbox"]:checked + label .ui:after {
        position: absolute;
        left: 6px;
        width: 65px;
        border-radius: 15px;
        font-size: 14px;
        font-weight: bold;
        line-height: 22px;
        -webkit-transition: all .2s ease;
        transition: all .2s ease;
    }

    [type="checkbox"]:not(:checked) + label .ui:before {
        content: "no";
        left: 32px;
        color: rgba(255,255,255,.7);
    }

    [type="checkbox"]:checked + label .ui:after {
        content: "yes";
        color: var(--color-primary-dark);
    }

    [type="checkbox"]:focus + label:before {
        box-sizing: border-box;
        margin-top: -1px;
    }

}
</style>
