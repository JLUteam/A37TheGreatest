<template>
    <div id="phonenumbe" class="form__div">
        <label for="phonenumbe_input" class="form__title">手机号码</label>
        <img class="logo" src="../assets/svg/cn.svg" alt="flag">
        <input type="text" class="form__input" id="phonenumbe_input" v-model="phonenumbe"
            placeholder="请输入您的手机号码">
    </div>
</template>
<script>
export default {
    name: "MyPhoneNumbe",
    data() {
        return {
            phonenumbe: ''
        }
    },
    watch: {
        phonenumbe(val) {
            this.$emit('PhoneNumber', val)
        }
    }
}
</script>

<style scoped>
.logo {
    position: absolute;
    left: .38rem;
    top: 1.08rem;
    width: .48rem;
    height: .48rem;
    z-index: 2;
}
</style>