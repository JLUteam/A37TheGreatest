<template>
    <div id="username" class="form__div">
        <label for="username_input" class="form__title">username</label>
        <img class="logo" src="../assets/svg/user.svg" alt="email">
        <input type="text" class="form__input" id="username_input" v-model="username" placeholder="Enter your username">
    </div>
</template>
<script>
export default {
    name: "MyUserName",
    data() {
        return {
            username: ''
        }
    },
    watch: {
        username(val) {
            this.$emit('UserName', val)
        }
    }
}
</script>

<style lang="less" scoped>
</style>