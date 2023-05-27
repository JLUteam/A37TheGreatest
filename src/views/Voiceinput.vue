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
export default  {
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
    justify-content: center;
    align-items: center;
    width: 100%;
    .voiceinput__content{
        width: 100%;
        height: 100%;
      
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
