<template>
            <div id="password" class="form__div">
                <label for="password_input" id="title" class="form__title">password</label>
                <img class="logo" src="../assets/svg/IconsLock.svg" alt="IconsLock">
                <a href="" class="forgot">forgot</a>
                    <img class="IconsEye" :src="currentImage_IconsEye" alt="IconsEye_Fasle"  @click="togglePasswordVisibility">
                <input :type="passwordvisible ? 'text' : 'password'" v-model="password" class="form__input"
                    id="password_input" placeholder="Enter your password">
            </div>
</template>
<script>
export default {
    name: "MyPassword",
    data(){
        return{
            password: '',
            passwordvisible: false,
            currentImage_IconsEye: require('../assets/svg/IconsEye_False.svg') ,
        }
    },
    methods: {
        togglePasswordVisibility() {
            this.passwordvisible = !this.passwordvisible;
            if (this.currentImage_IconsEye === require('../assets/svg/IconsEye_False.svg')) {
                this.currentImage_IconsEye = require('../assets/svg/IconsEye_True.svg')
            } else {
                this.currentImage_IconsEye = require('../assets/svg/IconsEye_False.svg')
            }
        }
       
    }, watch: {
        password(val) {
            this.$emit('Password',val)
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
}

.forgot {
    position: absolute;
    text-decoration: none;
    z-index: 2;
    left: 13.5rem;
    top: 3.375rem;
    width: 53px;
    height: 24px;
    color: #4a44c6;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    text-align: right;

}

.IconsEye {
    z-index: 2;
    position: absolute;
    left: 17.5rem;
    top: 3.375rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
}
</style>