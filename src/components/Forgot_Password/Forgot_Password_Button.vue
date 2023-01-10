<template>
    <div class="base_Forgot_Password_Button">
        <p class="base_Forgot_Password_Button_p">
            <slot></slot>
        </p>
    </div>
</template>
<script>
export default {
    name: "Forgot_Password_Button"
};
</script>
<style lang="less">
.base_Forgot_Password_Button {
    position: relative;
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: .48rem;
    border: .03rem dashed #e9e9ff;
    transition: background-color 0.3s, border 0.3s;

    .base_Forgot_Password_Button_p {
        position: relative;
        margin-top: 0.3rem;
        color: #4a44c6;
        font-family: Manrope;
        font-size: .32rem;
        font-weight: 700;
        line-height: .52rem;
        text-align: center;
        transition: color 0.3s;
    }
}

.base_Forgot_Password_Button:hover {
    background: #928fff;
    border: .03rem none #e9e9ff;

    .base_Forgot_Password_Button_p {
        color: #ffffff;
    }
}
</style>