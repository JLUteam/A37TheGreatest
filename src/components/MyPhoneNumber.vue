<template>
<div id="phonenumbe" class="form__div">
    <label for="phonenumbe_input" class="form__title">Phone number</label>
    <img class="logo" src="../assets/svg/cn.svg" alt="flag">
    <input type="text" class="form__input" id="phonenumbe_input" v-model="phonenumbe"
        placeholder="Enter your Phone number">
</div>
</template>
<script>
export default {
    name: "MyPhoneNumbe",
    data(){
        return{
            phonenumbe: ''
        }
    },
    watch: {
        phonenumbe(val) {
            this.$emit('PhoneNumber',val)
        }
    }
}
</script>

<style>
.logo {
  position: absolute;
  left: 1.1875rem;
  top: 3.375rem;
  width: 24px;
  height: 24px;
  z-index: 2;
}</style>