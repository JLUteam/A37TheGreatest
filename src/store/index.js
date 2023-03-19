import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash';
Vue.use(Vuex)
const actions = {
    searchIncome({ commit, state }, keyword) {
        console.log('searchIncome')
        const result1 = state.income_statement.filter(item => {
            let allinfo = item.bname + item.bcategory + item.note + item.payment + item.btime
            return allinfo.indexOf(keyword) > -1
        })
        const resul2 = state.recodes.filter(item => {
            let allinfo = item.bname + item.bcategory + item.note + item.payment + item.btime
            return allinfo.indexOf(keyword) > -1
        })
        commit('setSearchResult', result1.concat(resul2));
    }
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
        } else if (state.click_time == ' 全部') {
            state.radio2 = '全部'
        }

    },
    pushrecodes(context, recode_new) {
        state.recodes.push(recode_new)
    },
    pushincome_statement(context, recode_new) {
        state.income_statement.push(recode_new)
    },
    updateuserinfo(context, item) {
        state.userinfo.uname = item[0]
        state.userinfo.uphone = item[1]
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
    },
    addrecode_needs(contect, newvalue) {
        state.recodes_needs.push(newvalue)
    },
    jian_needs(contect, recode) {
        const index = state.recodes_needs.indexOf(recode);
        if (index > -1) {
            state.recodes_needs.splice(index, 1);
        }
    },
    setSearchResult(state, result) {

        state.searchResult = result;
    },
    add_SearchResult(contect, result) {
        state.searchResult.push(result);

    },
    jian_searchResult(contect, result) {
        console.log(state.searchResult)
        const index = state.searchResult.indexOf(result);

        if (index > -1) {
            state.searchResult.splice(index, 1);
        }
        console.log(state.searchResult)
    },
    add_selectedItems(contect, result) {
        state.selectedItems.push(result);
    },
    jian_selectedItems(contect, result) {
        const index = state.selectedItems.indexOf(result);
        if (index > -1) {
            state.selectedItems.splice(index, 1);
        }
    },
    addcard(contect) {
        state.cards.push({
            name: '',
            amount: null,
            confirmed: false,
            pic: require('@/assets/svg/yinlian.svg'),
            id: state.cards.length + 1
        })
    },
    delete_intsorouts(contect, recode) {
        // console.log('delete_intsorouts')
        const temp = state.radio1 === '支出' ? state.recodes : state.income_statement;
        // console.log(temp)
        let index = -1;
        for (let i = 0; i < temp.length; i++) {
            var isEqual = _.isEqual(recode, temp[i]);
            if (isEqual) {
                index = i;
                break
            }
        }
        if (index > -1) {
            console.log(state.radio1 === '支出'?'支出':'收入')
            console.log(index)//输出第几条被删了
            temp.splice(index, 1);//本地删除

        }
        // console.log(temp)
    },
    updatarecode_insorouts(contect, recode) {
        let temp= [...state.radio1 === '支出' ? state.recodes : state.income_statement];
        for (var i = 0; i < temp.length; i++) {
            console.log(recode)
            console.log(temp[i])
             var isEqual = _.isEqual(recode[0][3], temp[i]);
            if (isEqual) {
                // 找到对象后修改数值
                // console.log(( [recode[0]]))
                temp[i][recode[0][0]] = recode[0][1];
                state.temp_insorouts = temp
                console.log(state.radio1 === '支出'?'支出':'收入')
                console.log(i)
                break;
            }
        }
    },
    save_insorouts(contect) {
        let temp = state.radio1 === '支出' ? state.recodes : state.income_statement;
        // console.log(temp)
        for (var i = 0; i < temp.length; i++){
        // console.log( state.temp_insorouts)
            for (var key in temp[i]) {
               console.log(state.temp_insorouts[i])
               if (temp[i][key] != state.temp_insorouts[i][key]) {
                 console.log(state.radio1 === '支出'?'支出':'收入')
                  console.log(key)//输出不相等的属性名
                  console.log(temp[i][key])//输出改后的属性值
                  console.log(i)//输出第几条被修改了
              }
          }
        }
        console.log('修改了')
        temp = state.temp_insorouts;
    }
}

const getters = {
    searchResult(state) {
        return state.searchResult;
    },
    getselectedItems(state) {
        return state.selectedItems;
    },
    getcards(state) {
        return state.cards
    }
}

const state = {
    total: '',
    total_income: '',
    recodes: [
        {
            "btime": "2023-03-13 21:59:29",
            "bname": "TEst",
            "ispic": false,
            "bpic": null,
            "bcategory": "餐饮",
            "note": "123",
            "payment": "test",
            "amount": 123,
            "isreceipt": true,
            "receipt": require("@/assets/Test_img/ticket_receipt_acg_0.jpg"),
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        }
    ],

    userinfo: {
        uid: '',
        iswx: false,
        wxid: '',
        iszfb: false,
        zfbid: '',
        uname: '张凯锋',
        uphone: '13758162383',
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

    ],
    recodes_needs: [
        {
            "btime": "2023-03-13 21:59:29",
            "amount": 340,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-02-12 21:59:29",
            "amount": -123,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-02-13 18:59:29",
            "amount": -175,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-03-13 12:59:29",
            "amount": 256,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-03-10 21:59:29",
            "amount": -156,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-03-15 21:59:27",
            "amount": -156,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        },
        {
            "btime": "2023-03-15 21:59:28",
            "amount": -156,
            "usr": "780303f9-b0a1-4d7b-a7b4-d191daa85f47"
        }
    ],
    activeName_needs: 'first',
    selectedItems: [],
    searchResult: [],
    cards: [
        {
            name: '支付宝',
            amount: null,
            confirmed: false,
            pic: require('@/assets/svg/zhifubao.svg'),
            id: 1
        },
        {
            name: '微信',
            amount: null,
            confirmed: false,
            pic: require('@/assets/svg/wechat1.svg'),
            id: 2
        },
        {
            name: '',
            amount: null,
            confirmed: false,
            pic: require('@/assets/svg/yinlian.svg'),
            id: 2
        }
    ],
    temp_insorouts:[],


}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store