<template>
    <div class="Another">
        <div class="Date info">
            <p>{{ Ispay ? '支付日期' : ' 收入日期' }}</p>
            <div class="result">
                <!-- <input type="text" v-model="Date_" placeholder="点此添加" ref="Date_" @click="getDate_">-->
                <el-date-picker v-model="value1" type="date" placeholder="选择日期" :editable="false">
                </el-date-picker>
            </div>
        </div>
        <div class="Time info">
            <p>{{ Ispay ? '支付时间' : ' 收入时间' }}</p>
            <div class="result_time">
                <el-time-picker v-model="value2" :picker-options="{
                    selectableRange: '0:0:00 - 23:59:59'
                }" placeholder="任意时间点" :editable="false">
                </el-time-picker>
            </div>
        </div>
        <div class="Receipt info">
            <p>收据图片</p>
            <div class="result">
                <img src="@/assets/svg/photo.svg" alt="">
                <p v-show="!this.isreceipt" @click="addreceipt()">点击添加</p>
                <p v-show="this.isreceipt" @click="showImage = true">查看</p>
            </div>
            <div v-if="showImage" class="image-container" @click="showImage = false">
                <img :src="this.recode_receipt" class="image" />
            </div>
        </div>



    </div>
</template>
<script>
export default {
    name: "Another",
    props: {
        bcategory: String,
        Ispay: Boolean,

    },
    data() {
        return {
            Date_: '',
            Time_: '',
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', date);
                    }
                }]
            },
            value1: '',
            value2: '',
            recode_receipt: null,
            isreceipt: false,
            showImage: false
        }
    },
    methods: {
        getDate_() {
            return this.value1.getFullYear() + "-" + (this.value1.getMonth() + 1).toString().padStart(2, "0") + "-" + this.value1.getDate().toString().padStart(2, "0")
        },
        getTime_() {
            return this.value2.getHours().toString().padStart(2, "0") + ":" + this.value2.getMinutes().toString().padStart(2, "0") + ":" + this.value2.getSeconds().toString().padStart(2, "0")
        },
        addreceipt() {
            // const recode = this.$store.state.recodes.find(recode => (recode.usr === this.recode.usr && (recode.bcategory === this.recode.bcategory)&&(recode.btime === this.recode.btime)&&(recode.amount === this.recode.amount)&&(recode.bname === this.recode.bname)));

            console.log("添加收据");
            //   console.log(recode);

            this.$confirm("", "选择上传方式", {
                distinguishCancelAndClose: true,
                confirmButtonText: "图库上传",
                cancelButtonText: "拍照上传",
                center: true,
                customClass: "photo",
                beforeClose: (action, instance, done) => {
                    if (action === "confirm") {
                        this.phototakefromku();
                        done();
                    } else if (action === "close") {
                        done();
                    } else {
                        this.cameratakephoto();
                        done();
                    }
                },
            })
                .then(() => {
                    this.$message({
                        type: "info",
                        message: "拍照上传",
                    });
                })
                .catch((action) => {
                    this.$message({
                        type: "info",
                        message:
                            action === "cancel" ? "放弃保存并离开页面" : "停留在当前页面",
                    });
                });

            //更新数据库
        },
        cameratakephoto() {
            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                // allowEdit: true,
                encodingType: navigator.camera.EncodingType.JPEG,
                destinationType: navigator.camera.DestinationType.DATA_URL,
            });
        },
        phototakefromku() {
            navigator.camera.getPicture(this.onSuccess, this.onFail, {
                quality: 50,
                destinationType: navigator.camera.DestinationType.DATA_URL,
                encodingType: navigator.camera.EncodingType.JPEG,
                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
                // allowEdit: true,
                // saveToPhotoAlbum: true,
            });
        },
        onSuccess(imageURL) {
            // alert("data:image/jpeg;base64," + imageURL);
            var str = "data:image/jpeg;base64," + imageURL;
            this.recode_receipt = str;
            this.isreceipt = true;

        },
        onFail(message) {
            this.$alert("", "上传失败", {
                confirmButtonText: "确定",
                showClose: false,
                center: true,
                type: "warning",
                customClass: "fail",
            });
        },
        getreceipt() {
            return this.recode_receipt
        },
        getisreceipt() {
            return this.isreceipt
        },
    }
,
computed: {

}
};
</script>
<style>
.el-picker-panel {
    left: 0.6rem !important;
    padding-left: .3rem !important;

}

.el-time-panel {
    left: 2.8rem !important;
    padding-left: 1.2rem !important;
}

/* .el-input__inner {
    pointer-events: none;
} */
</style>
<style lang="less" scoped>
input {
    border: none;
    outline: none;
    text-align: right;
    background-color: transparent;
    color: #121826;
    font-family: "Manrope-Regular";
    font-size: .28rem;
    font-weight: 400;
    line-height: .48rem;

}

.Another {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 6.54rem;
    height: 3.04rem;
    border-radius: 16px;
    background: #f9fafb;
    background-blend-mode: normal;
    margin-bottom: .48rem;

    .info {
        display: flex;
        justify-content: space-between;
        width: 5.58rem;
        height: .48rem;

        p {
            color: #6c727f;
            font-family: "Manrope-Regular";
            font-size: .28rem;
            font-weight: 400;
            line-height: .48rem;
        }
    }

    .Date {
        .result {

            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                // text-align: right;
            }

            /deep/.el-date-editor.el-input {
                width: 3rem;
                margin-left: .5rem;
                font-size: 0.28rem;
                margin-right: .2rem;
            }

            /deep/.el-input__inner {
                height: 0.4rem;
                border: none;
                background-color: transparent;
                margin-left: 1.3rem;
            }

            /deep/.el-icon-date:before {
                content: '';
            }

        }
    }

    .Time {
        .result_time {
            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                text-align: right;
                width: 1rem;
            }

            /deep/ .el-input__inner {
                height: 0.4rem;
                border: none;
                background-color: transparent;
                margin-left: 1.3rem;
                padding-left: .35rem;
            }

            /deep/.el-date-editor.el-input {
                width: 3rem;
                margin-left: .5rem;
                font-size: 0.28rem;
            }

            /deep/.el-icon-time:before {
                content: '';

            }


        }
    }


    .Receipt {
        .result {
            display: flex;
            justify-content: space-around;
            width: 2.08rem;

            img {
                width: .32rem;
                height: .32rem;
                margin-top: .1rem;

            }

            p {
                color: #121826;
                font-family: "Manrope-Regular";
                font-size: .28rem;
                font-weight: 400;
                line-height: .48rem;
                margin-right: -.2rem;
            }
        }
    }

    .image-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;

        .image {
            max-width: 90%;
            max-height: 90%;
            border: 1px solid rgba(255, 255, 255, 0.5);
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
    }
}
</style>