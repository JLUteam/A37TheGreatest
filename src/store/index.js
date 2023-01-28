import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const actions = {
    
}

const mutations = {
    pull_up() {
        state.Transactions_pull=true
    },
     pull_down() {
        state.Transactions_pull=false
    },
    updateStatus(context,[uid,value])
    {
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].isfinish=value
    },
    updateCategory(context,[uid,value])
    {
        console.log(state,uid,value)
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].bcategory=value
    },
        updatenote(context,[uid,value])
    {
        const Isrecodeid = (element) => element.uid == uid;
        state.recodes[state.recodes.findIndex(Isrecodeid)].note=value
    }
}

const state = {
    total: 15901.00,
    total_yes: 17667.78,
     Consumption: {
        '能源': 1048,
        '餐饮': 735,
        '娱乐': 580,
         '其他': 484,
    },

    recodes: [{
                uid:'1',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'支付宝',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:02',
                consumption: '-$163.10'
       },
       {        uid:'2',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:03',
                consumption: '-$163.98'
       },
      {         uid:'3',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:04',
                consumption: '-$163.98'
       },
      {         uid:'4',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:05',
                consumption: '-$163.98'
       },
      {         uid:'5',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:06',
                consumption: '-$163.98'
       },
       {        uid:'6',
                isbpic: true,
                isfinish: true,
                isremind: false,
                rtime: '',
                bcategory: '',
                note: '',
                payment:'',
                img: require('@/assets/img/Starbucks.png'),
                name: 'Starbucks',
                ShoppingTime: '6 Sep,2021 • 17:07',
                consumption: '-$163.98'
        }],
    Transactions_pull: false
}

const store = new Vuex.Store({
    actions,
    mutations,
    state,
})

export default store