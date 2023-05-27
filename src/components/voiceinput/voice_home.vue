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

        <div>
                <button @click="startRecognition" class="voice-box">{{ button_name }}</button>
                <input type="text" v-model="text_voice">
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

<style lang="less">
// .voice_input {
//         //内容居中
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         vertical-align: middle;




//         .output {
//                 margin-top: 1rem;
//                 font-size: .32rem;
//                 font-weight: 700;

//                 text-align: center;
//         }

// }

// .voice_button {
//         //内容居中

//         margin-top: 13rem;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         vertical-align: middle;

//         .circle_button {
//                 display: fixed;
//                 justify-content: center;
//                 align-items: center;
//                 left: 50%;
//                 width: 1.2rem;
//                 height: 1.2rem;
//                 border-radius: 50%;
//                 background-color: #409EFF;
//                 color: #fff;
//                 border: none;
//                 outline: none;
//                 cursor: pointer;
//                 font-size: .32rem;
//                 font-weight: 700;
//                 box-shadow: 0 0 10px rgba(0, 0, 0, .2);
//                 transition: all .3s ease;
//                 vertical-align: middle;

//                 &:hover {
//                         box-shadow: 0 0 20px rgba(0, 0, 0, .2);
//                 }
//         }
// }

.h1 {
        text-align: center;
}

.voice-box {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin: 50px auto;
        padding: 50px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
}

.voice-box input {
        box-sizing: border-box;
        padding: 10px;
        width: 70%;
        height: 50px;
        font-size: 18px;
        color: #187cff;
        border: 1px solid #187cff;
        border-radius: 3px 0px 0px 3px;
}

.voice-box button {
        width: 30%;
        height: 50px;
        line-height: 50px;
        font-size: 18px;
        color: white;
        background: #187cff;
        border: none;
        border-radius: 0px 3px 3px 0px;
        cursor: pointer;
}

.voice-box button::before {
        content: "";
        display: inline-block;
        width: 23px;
        height: 26px;
        vertical-align: middle;
        // background: url(./img/voice.png) no-repeat;
        background-size: contain;

}

.fixed-box {
        box-sizing: border-box;
        display: none;
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        border: .04rem solid #e0e7ff;
        background: rgba(16, 22, 62, .2);
}

.fixed-close {
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 24px;
        width: 20px;
        height: 20px;
        border: none;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAABeklEQVRIibXWsWoVQRQA0LObgGCTFFr6env9h/yETSz0tclrBEUJWhjzAqkV/A9/QrC2CtgIYqk2DwvdMExm991ZJrdaZoY53Bnm3u0Wy80BPuI21jjRPjqc4il+4FG3WG4ucS9ZtMaqMfoej5OxLz3uZAuPcXaDKNzt/TuCPFrgYyi87fEK543xKfQFLvoEaYVvQ19DnwxO4euWaA5P4UcBPIzCbmHRcYLleDqfox9wGEG5nnGKRzOvRilnnOIDluPD/BT6HG/GNp+CI/j+HDQCR/BqlPE7LuGlO5+F1sARPIzWwh32Jub3K/YKw1PFYYgV3rWEI2iKh2r7NnhbGZzdWKaeU03tzZ/W8ARH/2TGMq5BZ7XUElzVZebiOTzU3ho0RUqts4in8Kwuk8Uqig/wti4TQSP41XgfQMNlMIBf9fPd/x8t0RTn+h/LEX52i+XmN241RtM4K+Dfe3y7QZTysV/u7D18+RkP8AfPxPpubXzCL9zHVzz5C8ecbD1n3xuUAAAAAElFTkSuQmCC) no-repeat center center;
        background-size: 20px;
        transition: all .5s;
        cursor: pointer;
        outline: none;
}

.fixed-close:hover {
        transform: rotate(270deg);
        -webkit-transform: rotate(270deg);
}


.fixed-main {
        box-sizing: border-box;
        position: absolute;
        left: 20%;
        bottom: 0px;
        padding: 30px;
        width: 60%;
        height: 240px;
        font-size: 18px;
        background: white;
        border: 2px solid #e0e7ff;
        border-radius: 5px 5px 0px 0px;
        overflow-y: auto;
}

.fixed-icon {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -50px;
        width: 100px;
        height: 100px;
        background: linear-gradient(115deg, #56d8e4 5%, #9f01ea 95%);
        border: 1px solid #e0e7ff;
        border-radius: 50%;
}

.fixed-icon::before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #9f01ea;
        box-shadow: 0px 0px 6px 0px #9f01ea;
        border-radius: 50%;
        animation: move 1.5s infinite;
}

.fixed-icon::after {
        content: "";
        position: absolute;
        display: inline-block;
        width: 100px;
        height: 100px;
        border: 1px solid #56d8e4;
        box-shadow: 0px 0px 6px 0px #56d8e4;
        border-radius: 50%;
        animation: move 1.5s .5s infinite;

}

.fixed-icon img {
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

::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: #f9f9f9;
}

::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #187cff;
}
</style> 