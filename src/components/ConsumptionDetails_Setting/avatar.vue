<template>
    <div class="avatar">
        <div class="img" @click="photo()">
            <img :src="img_">
        </div>
        <input type="text" v-model="Amount" :placeholder="'点此修改' + placeholder_" ref="name_" @click="getname_">
    </div>
</template>
<script>
export default {
    name: "avatar",
    methods: {
        photo() {

        },
        getimg_() {
            return this.img
        },
        getname_() {
            return this.name_
        },
    },
    data() {
        return {
            img: this.img_,
            name: ''
        }
    },
    props: {

        bcategory: String,
        Ispay: Boolean,
        img_: String

    },
    computed:
    {
        placeholder_() {
            return this.Ispay ? '商户名' : '收入来源'
        }
    },

};
</script>
<style lang="less" scoped>
input {
    border: none;
    outline: none;
    padding-left: 2.55rem; // text-align: right;
    background-color: transparent;
    color: #121826;
    font-family: "Manrope-Regular";
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
    margin-left: -1.5rem;

}

.avatar {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
    width: 6.54rem;
    height: 1.96rem;

    .img {
        width: 1.28rem;
        height: 1.28rem;
        border-radius: .64rem;
        background-color: bisque;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            
        }
    }

    .p {
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