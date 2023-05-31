<template>
    <div class="avatar">
        <img :src=recode.bpic alt="">
        <input type="text" v-model="name_" ref="name_" />
    </div>
</template>
<script>
export default {
    name: "avatar",
    data() {
        return {
        }
    },

    props: {
        recode: {
            type: Object
        }
    },
    watch: {
        recode: {
            handler(newV) {
                this.recode = newV;
            },
            deep: true,
            immediate: true
        }

    },
    computed: {
        name_: {
            get() {
                return this.recode.bname;
            },
            set() {
                let recode_;
                if (this.$store.state.temp_insorouts === null) {
                    recode_ = this.recode
                } else {
                    let temp_ = this.$store.state.temp_insorouts
                    for (let i = 0; i < temp_.length; i++) {
                        if (temp_[i]['id'] == this.$store.state.changes.id) {
                            recode_ = temp_[i]

                        }
                    }

                }
                this.$parent.getchange(['bname', val, oldval, recode_]);
                this.$parent.isupdate()
            }
        },
        avatar: {
            get() {
                //有 '餐饮',
                // '购物',
                //     '美容',
                //     '通讯',
                //     '服饰',
                //     '居家',
                //     '日用',
                //     '学习',
                //     '公交',
                //     '礼物',
                //     '蔬菜',
                //     '娱乐',
                //     '工作',
                //     '旅行',
                //     '水果',
                //     '运动',
                //     '其他'几种，根据这个写switch

                // switch (this.recode.bcategory) {
                //     case '餐饮':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/canyin.svg');
                //         break;
                //     case '购物':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/gouwu.svg');
                //         break;
                //     case '美容':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/meirong.svg');
                //         break;
                //     case '通讯':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/tongxun.svg');
                //         break;          
                //     case '服饰':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/fushi.svg');
                //         break;
                //     case '居家':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/jujia.svg');
                //         break;
                //     case '日用':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/riyong.svg');
                //         break;
                //     case '学习':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/xuexi.svg');
                //         break;
                //     case '公交':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/gongjiao.svg');
                //         break;
                //     case '礼物':
                //         this.recode.bpic = require('@/assets/svg/icon_0p9q85sdf0hp/liwu.svg');
                //         break;
                //     case '蔬菜':

                // }


                return this.recode.bpic;



            },
        }
    
    }

};
</script>
<style lang="less" scoped>
input {
    border: none;
    outline: none;
    // padding-left: 3.0rem; // text-align: right;
    background-color: transparent;
    color: #121826;
    font-family: "Manrope-Regular";
    font-size: 0.28rem;
    font-weight: 400;
    line-height: 0.48rem;
    text-align: center;

}

.avatar {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    width: 6.54rem;
    height: 1.96rem;

    img {
        width: 1.28rem;
        height: 1.28rem;
    }

    p {
        width: 6.54rem;
        height: .52rem;
        color: #121826;
        font-family: "Manrope-Bold";
        font-size: .32rem;
        font-weight: 400;
        line-height: .52rem;
        text-align: center;
    }
}
</style>