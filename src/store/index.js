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

             if ( state.click_time === 'first') {
                 state.radio2='一天'

            } else if ( state.click_time === 'second') {
                state.radio2='一周'
            } else if ( state.click_time === 'third') {
                state.radio2='一月'
            }
            else if ( state.click_time === 'fourth') {
                state.radio2='一年'
            } else {
               state.radio2='全部'
                }
            
    },
    updateuserinfo(contect, [username, password, phonenumber]) {
        state.userinfo.uname = username;
        state.userinfo.upassword = password;
        state.userinfo.uphone=phonenumber

    },
    updateradio2(contect, newvalue) {
         state.radio2=newvalue
    },
    updateradio1(contect, newvalue) {
         state.radio1=newvalue
     }
}

const state = {
    total:'',
    total_income:'',
    recodes: [{
        uid: '1',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'energy',
        note: '',
        payment: '支付宝',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-7 17:02:10',
        amount: -100
    },
    {
        uid: '2',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-6 17:03:10',
        amount: -100
    },
    {
        uid: '3',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'entertainment',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-5 17:04:10',
        amount: -100
    },
    {
        uid: '4',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'other',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-4 17:05:10',
        amount: -100
    },
    {
        uid: '5',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'entertainment',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-1-7 17:06:10',
        amount: -100
    },
    {
        uid: '6',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2022-12-7 17:07:10',
        amount: -100
    },
    {
        uid: '7',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-7 17:08:10',
        amount: -100
    },
    {
        uid: '8',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',        
        btime: '2023-2-7 17:09:10',
        amount: -100
    },
    {
        uid: '9',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-7 17:10:10',
        amount: -100
    },
    {
        uid: '10',
        isbpic: true,
        isfinish: true,
        isremind: false,
        rtime: '',
        bcategory: 'food',
        note: '',
        payment: '',
        bpic: require('@/assets/img/Starbucks.png'),
        bname: 'Starbucks',
        btime: '2023-2-7 17:11:10',
        amount: -100
    }],
    
    userinfo: {
        uid: '',
        iswx: false,
        wxid: '',
        iszfbid: false,
        zfbid: '',
        uname: 'kaite',
        uphone: '123456789',
        upassword: '',
        upic: require('@/assets/img/avast.png'),
        ucreate: ''
    },
    income_statement: [
         {
        uid: 1,
        bname: 'Starbucks Coffee',
        isbpic: true,
       bpic: require('@/assets/img/Starbucks.png'),
        bcategory: 'energy',
        note: '',
        payment: '支付宝',
        amount: 100,
        btime: '2023-2-7 17:02:10',
        isreceipt: false,
        receipt:''
    }
    ],
    Transactions_pull: false,
    Transactions_click: false,
    precent_Transactions_bcategory: '',
    click_time: 'second',
    radio1:'支出',
    radio2: '一周',

}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

export default store