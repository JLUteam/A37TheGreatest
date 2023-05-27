<template>
        <!-- <div>
                <div class="voice_input">

                        <div class="output">
                                {{ output }}
                        </div>
                </div>
                <div class="voice_button">
                        <button class="circle_button" type="primary" @click="toggleRecording">{{ buttom_text }}</button>
                </div>
        </div> -->

        <div class="voice-box">
                <input type="text" v-model="text_voice" class="voice_text">
                <div class="fixed-icon" @click="startRecognition">
                        <img :src="require('@/assets/img/voice.png')" alt="" />
                </div>

                <!-- <div v-if="showFixedBox" class="fixed-box">
                        <div class="fixed-main">
                                <button class="fixed-close" @click="stopRecognition"></button>
                                <div>{{ recognitionText }}</div>
                                <div class="fixed-icon">
                                        <img src="dist\img\voice.png" alt="" />
                                </div>
                        </div>
                </div> -->
        </div>
</template>

<script>
// export default {

//         name: "voice_input",
//         data() {
//                 return {
//                         recording: false,
//                         recognition: null,
//                         commands: {
//                                 刷新: () => location.reload(),
//                                 后退: () => history.back(),
//                                 首页: () => history.pushState(null, '/')
//                         },
//                         buttom_text: '录音',
//                         output: ''
//                 };
//         },
//         mounted() {
//                 console.log('mounted');
//                 const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//                 this.recognition = new SpeechRecognition();
//                 this.recognition.lang = 'zh-CN';
//                 this.recognition.onresult = (event) => {
//                         const l = event.results.length;
//                         const result = event.results[l - 1][0].transcript.replaceAll(/[.,，。：？?!！:]/g, ' ').trim();
//                         this.commands[result]?.();
//                         console.log(result);
//                         this.output = result;
//                         console.log(this.output);
//                 };
//         },
//         methods: {
//                 // toggleRecording() {
//                 // // console.log('toggleRecording');
//                 // //         if (this.recording) {
//                 // //                 console.log('stopRecording');
//                 // //                 this.stopRecording();
//                 // //         } else {
//                 // //                  this.startRecording();
//                 // //         }
//                 // //         this.recording = !this.recording;
//                 // navigator.device.capture.captureAudio(
//                 //                 this.OnSuccess, this.Onerror
//                 //         );//默认limit=1
//                 // },
//                 // OnSuccess(mediaFiles) {
//                 //         var i, len;
//                 //         for (i = 0, len = mediaFiles.length; i < len; i += 1) {
//                 //                 // console.log(mediaFiles[i]);
//                 //                 var path = mediaFiles[i].fullPath;
//                 //                 path = decodeURIComponent(path);
//                 //                 var localURL = mediaFiles[i].localURL;
//                 //                 localURL = decodeURIComponent(localURL);
//                 //                 alert("录制成功！\n\n"
//                 //                         + "文件名：" + mediaFiles[i].name + "\n"
//                 //                         + "大小：" + mediaFiles[i].size + "\n\n"
//                 //                         + "localURL地址：" + localURL + "\n\n"
//                 //                         + "fullPath地址：" + path);
//                 //         }
//                 // },
//                 // Onerror(error) {
//                 //         alert(error);
//                 // },
//                 // startRecording() {
//                 //         this.recordingTimer = setTimeout(() => {
//                 //                 this.stopRecording();
//                 //         }, 60000); // 60秒后停止录音
//                 //         console.log('startRecording');
//                 //         this.recognition.start();
//                 // },
//                 // stopRecording() {
//                 //         clearTimeout(this.recordingTimer);
//                 //         this.recognition.stop();
//                 // }
//         },

//                 watch: {
//                         recording() {
//                                 this.buttom_text = this.recording ? '停止' : '录音';
//                         }
//                 }

// };

export default {
        data() {
                return {
                        recognitionText: '',
                        recognitionTimer: null,
                        voiceInstance: null,
                        button_name: '开始录音',
                        Status: null,
                        text_voice: '',
                };
        },
        mounted() {
                let times = null;
                const vm = this;

                // 实例化迅飞语音听写（流式版）WebAPI
                this.voiceInstance = new Voice({

                        // 服务接口认证信息 注：apiKey 和 apiSecret 字符串的长度都差不多，请不要填错了哦！
                        appId: '3060a023',
                        apiSecret: 'MDAzZGQyNWY3YWZlMTc5ZTJlYmQyZDUx',
                        apiKey: '9c63bff43a9ac93d2b5b33f35d9fad97',
                        // 注：要获取以上3个参数，请到迅飞开放平台：https://www.xfyun.cn/services/voicedictation 【注册的新用户，每天服务量500（也就是调500次），如果你需求里大请购买服务量：https://www.xfyun.cn/services/voicedictation?target=price】

                        onWillStatusChange: function (oldStatus, newStatus) {
                                //在这里进行页面中一些交互逻辑处理：注：倒计时（语音听写只有60s）！

                                vm.Status = newStatus;

                        },
                        onTextChange: function (text) {
                                //监听识别结果的变化
                                console.log('识别结果：', text)
                                vm.text_voice = text;
                                // 3秒钟内没有说话，就自动关闭
                                if (text) {
                                        clearTimeout(times);
                                        times = setTimeout(() => vm.voiceInstance.stop(), 3000);
                                        console.log(vm.voiceInstance);
                                }
                        }
                });
        },
        methods: {
                startRecognition() {

                        if (this.button_name == '开始录音') {
                                this.voiceInstance.start();


                        } else {
                                // 结束录音
                                this.voiceInstance.stop();
                                this.button_name = '开始录音'
                        }


                },

        },
        watch: {
                recognitionText() {
                        console.log(this.recognitionText);
                },
                button_name() {
                        console.log(this.button_name);
                },
                Status() {
                        if (this.Status === 'init') {
                                //开始录音
                                console.log('开始录音');
                                this.recognitionText = '开始录音';
                        }
                        else if (this.Status === 'ing') {
                                //录音中
                                console.log('录音中');
                                this.recognitionText = '录音中';
                                this.button_name = '录音中...'
                        } else if (this.Status === 'end') {
                                //识别结束
                                console.log('识别结束');
                                this.recognitionText = '识别结束';
                                this.button_name = '开始录音'

                        } else {
                                //未知状态
                                console.log('未知状态', this.Status);
                                this.recognitionText = '未知状态';
                        }
                },
                text_voice() {
                        console.log(this.text);
                }
        }
};
</script>

<style lang="less" scoped>
.voice-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

        .fixed-icon {
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 80%;
                left: 50%;
                margin-top: -50px;
                margin-left: -50px;
                width: 100px;
                height: 100px;
                background: linear-gradient(115deg, #56d8e4 5%, #9f01ea 95%);
                border: 1px solid #e0e7ff;
                border-radius: 50%;

                &::before {
                        content: "";
                        position: absolute;
                        display: inline-block;
                        width: 100px;
                        height: 100px;
                        border: 1px solid #56d8e4;
                        box-shadow: 0px 0px 6px 0px #56d8e4;
                        border-radius: 50%;
                        animation: move 1.5s infinite;
                }

                &::after {
                        content: "";
                        position: absolute;
                        display: inline-block;
                        width: 100px;
                        height: 100px;
                        border: 1px solid #56d8e4;
                        box-shadow: 0px 0px 6px 0px #56d8e4;
                        border-radius: 50%;
                        animation: move 1.5s infinite;
                        animation: move 1.5s infinite;
                        animation: move 1.5s infinite;
                }

                img {
                        width: 30px;
                        height: 50px;
                }

                @keyframes move {
                        0% {
                                opacity: 1;
                                transform: scale(1);
                        }

                        100% {
                                opacity: 0;
                                transform: scale(2);
                        }
                }
        }

        input {
                display: contents;
                justify-content: center;

                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                margin-top: 4rem;
                font-size: 0.75rem;
                text-align: center;
                color: #000;
                background-color: transparent;
        }

}
</style> 