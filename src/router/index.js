import VueRouter from "vue-router";
import SignIn from "../views/SignIn"
import SignUp from "../views/SignUp"
import Options from "../views/Options"
import Captcha from "../views/Captcha"
import Forgot_Password from "../views/Forgot_Password"
import ConsumptionDetails from "@/views/ConsumptionDetails"
import home from '@/views/home.vue'
import Percent from '@/views/Percent.vue'
const router = new VueRouter({
    model: 'hash',
    routes: [
        {
            name: "SignIn",
            path: "/SignIn",
            component: SignIn
        },
        {
            name: "SignUp",
            path: "/SignUp",
            component: SignUp
        },
        {
            name: "Options",
            path: "/",
            component: Options
        },
        {
            name: "Captcha",
            path: "/Captcha",
            component: Captcha
        },
        {
            name: "Forgot_Password",
            path: "/Forgot_Password",
            component: Forgot_Password
        },
        {
            name: "home",
            path: "/home",
            component: home,
        },
         {
            name: "Percent",
            path: "/Percent",
            component: Percent,
           
        },
        {
            name: "ConsumptionDetails",
            path: "ConsumptionDetails",
            component: ConsumptionDetails
        }
    ]
});

export default router;