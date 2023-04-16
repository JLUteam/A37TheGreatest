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
            name_: this.recode.bname,
            oldval_name: this.recode.bname,
        }
    },
    watch: {
        name_: function (val, oldval) {
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
    props: {
        recode: {
            type: Object
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
    text-align:center;

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