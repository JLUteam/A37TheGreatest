<template>
    <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
        <div :class="Line" @mouseover="Active" @mouseleave="Unactive"> 
            <div :class="BigBall">
                <div :class="dot"></div>
             <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: "Forgot_Password_Line",
    data() {
        return {
            dot: {
                dot:false
            },
            Line: 'Line1',
            BigBall:'BigBall1'
        };
    },
    methods: {
        Active() {
            this.dot.dot = true
            this.Line = 'Line2'
            this.BigBall = 'BigBall2'
        },
        Unactive()
        {
            this.dot.dot = false
            this.Line = 'Line1'
            this.BigBall = 'BigBall1'
        }
    }
};
</script>
<style >
.Line1 {
    position: relative;
    margin-top: 0.5rem;
    width: 6.54rem;
    height: 2.28rem;
    border-radius: .3rem;
    background: #f4f4f6;
    background-blend-mode: normal;
}
.Line2 {
    position: relative;
    margin-top: 0.5rem;
    width: 6.54rem;
    height: 2.28rem;
    border-radius: .3rem;
    background: #E9E9FF;
    background-blend-mode: normal;
}
.BigBall1 {
    position: absolute;
    left: 0.3rem;
    top: 0.35rem;
    width: .36rem;
    height: .36rem;
    border-radius: 0.5625rem;
    background: #bebcff;
    background-blend-mode: normal;
}
.BigBall2 {
    position: absolute;
    left: 0.3rem;
    top: 0.35rem;
    width: .36rem;
    height: .36rem;
    border-radius: 0.5625rem;
    background: #928fff;
    background-blend-mode: normal;
}
.dot {
    position: absolute;
    left: .08rem;
    top: .08rem;
    width: .2rem;
    height: .2rem;
    border-radius: 0.1rem;
    background: #4a44c6;
    background-blend-mode: normal;
}

.Tip1_Forget_Password {
    position: absolute;
    left: .92rem;
    top: 0rem;
    width: 5.3rem;
    height: .52rem;
    color: #4a44c6;
    font-family: Manrope;
    font-size: .32rem;
    font-weight: 700;
    line-height: .52rem;
}
.Tip2_Forget_Password {
    position: absolute;
    left: .92rem;
    top: 0.5rem;
    width: 5.3rem;
    height: .96rem;
    color: #6c727f;
    font-family: Manrope;
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;
}
</style>