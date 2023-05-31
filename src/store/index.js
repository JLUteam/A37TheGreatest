import Vuex from 'vuex'
import Vue from 'vue'
import _ from 'lodash';
import axios from 'axios';
Vue.use(Vuex)
const actions = {
    searchIncome({ commit, state }, keyword) {
        // console.log('searchIncome')
        const result1 = state.income_statement.filter(item => {
            let allinfo = item.bname + item.bcategory + item.note + item.payment + item.btime
            return allinfo.indexOf(keyword) > -1
        })
        const resul2 = state.recodes.filter(item => {
            let allinfo = item.bname + item.bcategory + item.note + item.payment + item.btime
            return allinfo.indexOf(keyword) > -1
        })
        let ans =result1.concat(resul2)
        for (let i = 0; i < ans.length; i++) {
             if (ans[i].bpic == null) {
                    switch (ans[i].bcategory) {
                        case '餐饮':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/canyin.svg')
                            break;
                        case '服饰':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/fushi.svg')
                            break;
                        case '公交':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gongjiao.svg')
                            break;
                        case '工作':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gongzuo.svg')
                            break;
                        case '购物':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/gouwu.svg')
                            break;
                        case '居家':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/jujia.svg')
                            break;
                        case '礼物':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/liwu.svg')
                            break;
                        case '旅行':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/lvhang.svg')
                            break;
                        case '学习':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/xuexi.svg')
                            break;
                        case '美容':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg')
                            break;
                        case '日用':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/riyongpin.svg')
                            break;
                        case '蔬菜':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shucai.svg')
                            break;
                        case '水果':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shuiguo.svg')
                            break;
                        case '通讯':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg')
                            break;
                        case '娱乐':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/yule.svg')
                            break;
                        case '运动':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/yundong.svg')
                            break;
                        case '其他':
                            ans[i].bpic = require('@/assets/svg/icon_ycof0s6ppu/shezhi.svg')
                            break;
                          case '兼职':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/jianzhi.svg')
                            break;
                        case '礼金':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/lijin.svg')
                            break;
                        case '退货':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/tuihuo.svg')
                            break;
                        case '金融':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/weibiaoti5.svg')
                            break;
                        case '银行':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/yinhangka.svg')
                            break;
                        case '工资':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/yuangonggongzi.svg')
                            break;
                        case '投资':
                            ans[i].bpic = require('@/assets/svg/icon_0p9q85sdf0hp/zizhuguanli1.svg')
                            break;
                        default:
                            break;
                    }
            }
            
        }
        commit('setSearchResult', ans);
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
        console.log('delete_intsorouts')
        const temp = state.radio1 === '支出' ? state.recodes : state.income_statement;
        console.log('delete_intsorouts')
        console.log("??????")
        console.log(temp)
        let index = -1;
        for (let i = 0; i < temp.length; i++) {
            var isEqual = _.isEqual(recode, temp[i]);
            if (isEqual) {
                index = i;
                console.log(state.radio1 === '支出' ? '支出' : '收入')
                console.log(index)//输出第几条被删了
                console.log(temp[index].id)
                if (state.radio1 === '支出') {
                    state.deletes.isout = true
                      
                } else {
                    state.deletes.isout = false
                    break
                }
                state.deletes.id = temp[i].id;
            }
            if (index > -1) {
                temp.splice(index, 1);//本地删除
            }
            // console.log(temp)
        }
    },
    updatarecode_insorouts(contect, recode) {
        console.log('updatarecode_insorouts')
        console.log(recode)
        let temp = [];
        //  let temp = state.temp_insorouts === null ? [...(state.radio1 === '支出' ? state.recodes : state.income_statement)] : state.temp_insorouts;
        if (state.temp_insorouts === null) {
            var copyobj = state.radio1 === '支出' ? state.recodes : state.income_statement
            for (let i = 0; i < copyobj.length; i++) {
                temp.push({ ...copyobj[i] })
            }
        } else {
            temp = state.temp_insorouts
        }
        console.log(temp)

        for (let i = 0; i < temp.length; i++) {
            console.log(recode)
            console.log(temp[i])
            var isEqual = _.isEqual(recode[0][3], { ...temp[i] });
            if (isEqual) {
                // 找到对象后修改数值
                // console.log(( [recode[0]]))
                console.log(recode[0][1] + '1111111')
                temp[i][recode[0][0]] = recode[0][1];
                state.temp_insorouts = temp
                console.log(state.radio1 === '支出' ? '支出' : '收入')
                console.log(i)
                state.changes.id = temp[i].id
                break;
            }
        }
       
    },
    save_insorouts(contect) {
        let changes = {
            keys: [],
            newvals: [],
            id: '0',
            isout: true
        }
        let temp = state.radio1 === '支出' ? state.recodes : state.income_statement;
        // console.log(state.temp_insorouts)   
        if (state.radio1 != '支出') {
            changes.isout = false
        }
        for (var i = 0; i < temp.length; i++) {
            // console.log( state.temp_insorouts)
            for (var key in temp[i]) {
                console.log("sdgdsgersgdstfdsfds")
                console.log(key)
                console.log(state.temp_insorouts[i])
                console.log(temp[i])
                if (temp[i][key] != state.temp_insorouts[i][key]) {
                    // console.log("!!!!!!!!!!!!")
                    // console.log(state.radio1 === '支出' ? '支出' : '收入')
                    // console.log(key)//输出不相等的属性名
                    console.log("iiiiiiii")
                    changes.keys.push(key)
                    // console.log(state.temp_insorouts[i][key])
                    changes.newvals.push(state.temp_insorouts[i][key])//输出改后的属性值
                    // console.log(temp[i].id)
                    // console.log(temp[i])
                    changes.id = temp[i]['id']
                    // console.log(i)//输出第几条被修改了
                    
                }
            }
        }
        console.log("oooooop")
        console.log(changes)
        state.changes = changes
        // console.log('修改了')
        if (state.radio1 === '支出') {
            state.recodes = state.temp_insorouts;
        } else {
            state.income_statement = state.temp_insorouts;
        }
    },
    updatereceipt(contect, recode) {
        //recode[0] bool true 表示支出 ，false 表示收入
        //recode[1] id
        //recode[2] 图片
        if (recode[0]) {
            for (let i = 0; i < state.recodes.length; i++) {
                if (state.recodes[i].id == recode[1]) {
                    state.recodes[i].receipt = recode[2];
                    state.recodes[i].isreceipt = true;
                }
            }
        } else {
            for (let i = 0; i < state.income_statement.length; i++) {
                if (state.income_statement[i].id == recode[1]) {
                    state.income_statement[i].receipt = recode[2];
                    state.income_statement[i].isreceipt = true;
                }
            }
        }
    },
    deleterecodesbyid(contect, id) {
        for (let i = 0; i < state.recodes.length; i++) {
            if (state.recodes[i].id == id) {
                state.recodes.splice(i, 1);
            }
        }

    },
    clearselectedItems(contect) {
        state.selectedItems = [];
    },
    updaterecodes_needs(contect,newvalues){
        state.recodes_needs.push(newvalues);
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
    },
    getchanges(state) {
        return state.changes
    },
    getdeletes(state) {
        return state.deletes
    }
    ,
    getreoces(state) {
        return state.recodes
    },
    getincome(state) {
        return state.income_statement
    }

}

const state = {
    total: '',
    total_income: '',
    recodes: [
     
            
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
            "btime": "2023-05-27 00:00:00",
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
    recodes_needs: [],
    activeName_needs: 'second',
    selectedItems: [],
    searchResult: [],
    temp_insorouts: null,
    changes: {
        keys: [],
        newvals: [],
        id: '-1',
        isout:true
    },
    deletes: {
         id: '-1',
        isout:true
    }

}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store