import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions = {

}

const mutations = {
    pull_up() {
        state.Transactions_pull = true
    },
    pull_down() {
        state.Transactions_pull = false
    },
    updateStatus(context, [uid, value]) {
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].isfinish = value
    },
    updateCategory(context, [uid, value]) {
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].bcategory = value
    },
    updatenote(context, [uid, value]) {
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].note = value
    },
    updateTransactions_click() {
        state.Transactions_click = !state.Transactions_click
    },
    updateprecent_Transactions_bcategoryk(context, truename) {
        state.precent_Transactions_bcategory = truename
    },
    updateactiveName(context, value) {

        state.click_time = value

        if (state.click_time === 'first') {
            state.radio2 = '一天'

        } else if (state.click_time === 'second') {
            state.radio2 = '一周'
        } else if (state.click_time === 'third') {
            state.radio2 = '一月'
        }
        else if (state.click_time === 'fourth') {
            state.radio2 = '一年'
        } else {
            state.radio2 = '全部'
        }

    },
    // updateuserinfo(contect, [username, password, phonenumber]) {
    //     state.userinfo.uname = username;
    //     state.userinfo.upassword = password;
    //     state.userinfo.uphone = phonenumber

    // },

    updateuserinfosignin(contect, item) {
        state.userinfo.uid = item.uid;
        if (item.iswx === 0) {
            state.userinfo.iswx = false;
        } else {
            state.userinfo.iswx = true;
            state.userinfo.wxid = item.wxid;
        }
        if (item.iszfb === 0) {
            state.userinfo.iszfb = false;
        } else {
            state.userinfo.iszfb = true;
            state.userinfo.zfbid = item.zfbid;
        }
        state.userinfo.uname = item.uname;
        state.userinfo.uphone = item.uphone;
        if (item.upic != "not found") {
            state.userinfo.upic = item.upic
        }
        state.userinfo.ucreate = item.ucreate

    },
    updateradio2(contect, newvalue) {
        state.radio2 = newvalue
    },
    updateradio1(contect, newvalue) {
        state.radio1 = newvalue
    }
}

const state = {
    total: '',
    total_income: '',
    recodes: [],

    userinfo: {
        uid: '',
        iswx: false,
        wxid: '',
        iszfb: false,
        zfbid: '',
        uname: '',
        uphone: '',
        upic: require('@/assets/img/avast.png'),
        ucreate: ''
    },
    income_statement: [
        {
            bname: 'Starbucks Coffee',
            isbpic: true,
            bpic: require('@/assets/img/Starbucks.png'),
            bcategory: 'energy',
            note: '',
            payment: '支付宝',
            amount: 100,
            btime: '2023-2-7 17:02:10',
            isreceipt: false,
            receipt: ''
        }
    ],
    Transactions_pull: false,
    Transactions_click: false,
    precent_Transactions_bcategory: '',
    click_time: 'second',
    radio1: '支出',
    radio2: '一周',

}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

export default store