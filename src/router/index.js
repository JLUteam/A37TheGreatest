import VueRouter from "vue-router";
import SignIn from "../views/SignIn"
import SignUp from "../views/SignUp"
import Options from "../views/Options"
import Captcha from "../views/Captcha"
import Forgot_Password from "../views/Forgot_Password"
import ConsumptionDetails from "@/views/ConsumptionDetails"
import ConsumptionDetails_Setting from "@/views/ConsumptionDetails_Setting"
import home from '@/views/home.vue'
import Percent from '@/views/Percent.vue'
import person from '@/views/person.vue'
import person_MyAccount from '@/views/person_MyAccount.vue'
import person_Setting from '@/views/person_Setting.vue'
import WordInputSetting from '@/views/WordInputSetting.vue'
import Income from '@/components/WordInputSetting/Income.vue'
import Outcome from '@/components/WordInputSetting/Outcome.vue'
import CaptchaInput from "@/components/captcha/Captcha_Captcha.vue"
import needs from "@/views/needs.vue"
import waterfall from "@/components/needs/waterfall.vue"
import search from "@/components/needs/search.vue";
import qingjingzhuangbeng from '@/components/needs/qingjingzhuangbeng.vue'
import caiwujiankang from '@/components/needs/caiwujiankang.vue'
import share from '@/components/needs/share.vue'
import Voiceinput from '@/views/Voiceinput.vue'
import ConsumptionDetails_duotu from "@/views/ConsumptionDetails_duotu.vue"
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
            component: Captcha,
            children: [
                {
                    name: 'captchanput',
                    path: '/CaptchaInput',
                    component: CaptchaInput
                }
            ]
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
            path: "/ConsumptionDetails",
            component: ConsumptionDetails
        },
        {
            name: "ConsumptionDetails_Setting",
            path: "/ConsumptionDetails_Setting",
            component: ConsumptionDetails_Setting
        },
        {
            name: "person",
            path: "/person",
            component: person,
        },
        {
            name: "person_MyAccount",
            path: "/person_MyAccount",
            component: person_MyAccount,

        },
        {
            name: "person_Setting",
            path: "/person_Setting",
            component: person_Setting,

        },
        {
            name: 'WordInputSetting',
            path: '/WordInputSetting',
            component: WordInputSetting,
            children: [
                {
                    name: 'Income',
                    path: 'Income',
                    component: Income
                },
                {
                    name: 'Outcome',
                    path: 'Outcome',
                    component: Outcome
                }
            ]
        },
        {
               name: "needs",
            path: "/needs",
            component: needs,
            children: [
                 {
                    name: 'needs',
                    path: '',
                    component: waterfall,
                },
                {
                    name: 'qingjingzhuangbeng',
                    path: 'qingjingzhuangbeng',
                    component: qingjingzhuangbeng,
                },{
                    name: 'search',
                    path: 'search',
                    component: search,
                }, {
                    name: 'caiwujiankang',
                    path: 'caiwujiankang',
                    component:caiwujiankang
                },
                  {
                            name: 'share',
                            path: 'share',
                          component:share
                 }
            ]
        },
        {
            name: 'voiceinput',
            path: '/voice_input',
            component: Voiceinput
        },
        {
            name: 'ConsumptionDetails_duotu',
            path: '/ConsumptionDetails_duotu',
            component: ConsumptionDetails_duotu
        }


    ]
});
const originalPush = VueRouter.prototype.push //解决路由重复点击报错问题

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router;