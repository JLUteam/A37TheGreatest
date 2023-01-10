<template>
    <div class="basic">
        <MyHeader>
        <p class="tip1" :key="3">Let's Sign You In</p>
        <p class="tip2" :key="4">Welcome back, you've been missed!</p>
        </MyHeader>
        <MyFromSignIn />
        <MySocialSignIn/>
        <MySignIn>
             <p class="signin">Dont's have an account?</p>

            <router-link class="signin_a" :to="{
                name:'SignUp'
            }"> Sign Up</router-link>
        </MySignIn>
    </div>
</template>
<script>
import MyHeader from '../components/MyHeader.vue'
import MyFromSignIn from '../components/MyFrom_SignIn.vue'
import MySocialSignIn from '../components/MySocialSignIn.vue';
import MySignIn from '../components/MySignIn.vue';
export default {
    name: 'SignIn',
    components: {
        MyHeader,
        MyFromSignIn,
        MySocialSignIn,
        MySignIn
    }
}
</script>

<style scoped>
.basic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
