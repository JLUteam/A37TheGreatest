<template>
    <div class="avatar">
        <img :src="avatar" alt="">
        <input type="text" v-model="name_" ref="name_" />
    </div>
</template>
<script>
export default {
    name: "avatar",
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
                switch (this.recode.bcategory) {
                    case '餐饮':
                        return require('@/assets/svg/icon_ycof0s6ppu/canyin.svg');

                    case '购物':
                        return require('@/assets/svg/icon_ycof0s6ppu/gouwu.svg');

                    case '美容':
                        return require('@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg');

                    case '通讯':
                        return require('@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg');

                    case '服饰':
                        return require('@/assets/svg/icon_ycof0s6ppu/fushi.svg');

                    case '居家':
                        return require('@/assets/svg/icon_ycof0s6ppu/jujia.svg');

                    case '日用':
                        return require('@/assets/svg/icon_ycof0s6ppu/riyongpin.svg');

                    case '学习':
                        return require('@/assets/svg/icon_ycof0s6ppu/xuexi.svg');

                    case '公交':
                        return require('@/assets/svg/icon_ycof0s6ppu/gongjiao.svg');

                    case '礼物':
                        return require('@/assets/svg/icon_ycof0s6ppu/liwu.svg');

                    case '蔬菜':
                        return require('@/assets/svg/icon_ycof0s6ppu/shucai.svg');

                    case '娱乐':
                        return require('@/assets/svg/icon_ycof0s6ppu/yule.svg');

                    case '工作':
                        return require('@/assets/svg/icon_ycof0s6ppu/gongzuo.svg');

                    case '旅行':
                        return require('@/assets/svg/icon_ycof0s6ppu/lvhang.svg');

                    case '水果':
                        return require('@/assets/svg/icon_ycof0s6ppu/shuiguo.svg');

                    case '运动':
                        return require('@/assets/svg/icon_ycof0s6ppu/yundong.svg');

                    case '其他':
                        return require('@/assets/svg/icon_ycof0s6ppu/shezhi.svg');

                    default:
                        return require('@/assets/svg/icon_ycof0s6ppu/shezhi.svg');
                }



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