<template>
    <div class="voiceinput">
        <div class="voiceinput__title">
            <span>语音输入</span>
        </div>
        <div class="voiceinput__content">
            <voice_home></voice_home>
        </div>
    </div>
</template>
<script>
import voice_home from '@/components/voiceinput/voice_home.vue';
export default {
    name: " voice_input",
    components: {
        voice_home
    },
};
</script>
<style lang="less" scoped>
.voiceinput {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 10rem;

    .voiceinput__title {
        width: 100%;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        background-color: #928fff;
        border-bottom: 1px solid #928fff;

    }

    .voiceinput__content {
        width: 100%;
        // height: 100%;
        height: 6rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    /* background-color: #121826;   */
}

::-webkit-scrollbar {
    display: none;
}
</style>
