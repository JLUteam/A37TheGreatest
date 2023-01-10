<template>
    <div class="basic">
        <Title_Captcha>
            <p class="tip1_Captcha" :key="2">Forgot Password?</p>
            <p class="tip2_Captcha" :key="3">Please select option to send link reset password</p>
        </Title_Captcha>
        <Forgot_Password_Line>
            <p class="Tip1_Forget_Password">Send to your Email ✉️</p>
            <p class="Tip2_Forget_Password">Password reset link has been sent to your email address</p>
        </Forgot_Password_Line>
        <Forgot_Password_Line>
            <p class="Tip1_Forget_Password">Send to your Phone number 📲</p>
            <p class="Tip2_Forget_Password">Password reset link has been sent to your phone number</p>
        </Forgot_Password_Line>
        <Forgot_Password_Button>
            <router-link class="base_Forgot_Password_Button_p" :to="{
                name:'SignUp'
            }">Sign up</router-link>
        </Forgot_Password_Button>
        <Forgot_Password_Button>
            Resend code
        </Forgot_Password_Button>
    </div>
</template>

<script>
import Title_Captcha from "../components/captcha/Title_Captcha.vue";
import Forgot_Password_Line from '../components/Forgot_Password/Forgot_Password_Line.vue'
import Forgot_Password_Button from '../components/Forgot_Password/Forgot_Password_Button.vue'

export default {
    name: "Forgot_Password",
    components: {
        Title_Captcha,
        Forgot_Password_Line,
        Forgot_Password_Button
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
