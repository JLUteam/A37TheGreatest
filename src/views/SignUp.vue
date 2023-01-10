<template>
    <div class="basic">
        <MyHeader>
        <p class="tip1" :key="3">Getting Started</p>
        <p class="tip2" :key="4">Create an account to continue!</p>
        </MyHeader>
        <MyFrom />
        <MySocial />
        <MySignIn> <p class="signin"> Already have an account?</p>

            <router-link class="signin_a" :to="{
                name:'SignIn'
            }">  Sign in</router-link></MySignIn>
      
    </div>

</template>
<script>
import MyHeader from '../components/MyHeader.vue'
import MyFrom from '../components/MyFrom.vue'
import MySocial from '../components/MySocial.vue';
import MySignIn from '../components/MySignIn.vue';
export default {
    name: 'SignUp',
    components: {
        MyHeader,
        MyFrom,
        MySocial,
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
