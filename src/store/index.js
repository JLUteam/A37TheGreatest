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
        } else if(state.click_time != 0){
            state.radio2 = '全部'
        }

    },
      pushrecodes(context, recode_new) {
        state.recodes.push(recode_new)
    },
        pushincome_statement(context, recode_new) {
        state.income_statement.push(recode_new)
    },


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
    recodes: [{
        "btime": "2023-03-13 21:59:29",
        "bname": "TEst",
        "ispic": false,
        "bpic": null,
        "bcategory": "餐饮",
        "note": "123",
        "payment": "test",
        "amount": 123,
        "isreceipt": false,
        "receipt": null,
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
    }],

    userinfo: {
        uid: '',
        iswx: false,
        wxid: '',
        iszfb: false,
        zfbid: '',
        uname: '',
        uphone: '',
        upic: require('@/assets/img/wechat.png'),
        ucreate: ''
    },
    income_statement: [
        
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 178.0,
        "btime": "2023-02-05 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 178.0,
        "btime": "2023-02-12 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 178.0,
        "btime": "2023-02-19 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 178.0,
        "btime": "2023-02-26 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 178.0,
        "btime": "2023-03-04 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "KFC",
        "ispic": false,
        "bpic": null,
        "bcategory": "兼职",
        "note": "打工",
        "payment": "银行卡",
        "amount": 179.0,
        "btime": "2023-03-05 00:00:00",
        "isreceipt": false,
        "receipt": null
    },
    {
        "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47",
        "bname": "支付宝",
        "ispic": false,
        "bpic": null,
        "bcategory": "理财",
        "note": "买基金",
        "payment": "支付宝",
        "amount": 200.0,
        "btime": "2023-03-27 00:00:00",
        "isreceipt": false,
        "receipt": null
    }
    ],
    Transactions_pull: false,
    Transactions_click: false,
    precent_Transactions_bcategory: '',
    click_time: 'second',
    radio1: '支出',
    radio2: '一天',
    outcomelist: [
        '餐饮',
        '购物',
        '美容',
        '通讯',
        '服饰',
        '居家',
        '日用',
        '学习',
        '公交',
        '礼物',
        '蔬菜',
        '娱乐',
        '工作',
        '旅行',
        '水果',
        '运动',
        '其他'
    ]
    ,
    incomelist: [
        '兼职',
        '礼金',
        '设置',
        '退货',
        '金融',
        '银行',
        '工资',
        '投资',
        '其他'

    ]


}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

export default store