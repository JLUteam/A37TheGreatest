<template>
  <div class="Another">
    <div class="Date info">
      <p>{{ Ispay_ ? "支付日期" : " 收入日期" }}</p>
      <div class="result">
        <p>{{ Date_ }}</p>
      </div>
    </div>
    <div class="Time info">
      <p>{{ Ispay_ ? "支付时间" : " 收入时间" }}</p>
      <div class="result">
        <p>{{ Time_ }}</p>
      </div>
    </div>
    <div class="Receipt info">
      <p>收据图片</p>
      <div class="result">
        <img src="@/assets/svg/photo.svg" alt="" />
        <p v-show="!isreceipt" @click="addreceipt()">点击添加</p>
        <p v-show="isreceipt" @click="showImage = true">查看</p>
      </div>
    </div>
    <div v-if="showImage" class="image-container" @click="showImage = false">
      <img :src="showinfo()" class="image" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Another",
  data() {
    return {
      showImage: false,
      Date_: '',
      Time_: ''

    };
  },
  props: {
    recode: {
      type: Object,
    },
  },
  computed: {
    Ispay_() {
      return this.$store.state.radio1 === "支出";
    },
    isreceipt: {
      get() {
        return this.recode.isreceipt;
      },
    },
    recode__: {
      get() {
        return this.recode
      },
      set() {
        this.Date_ = this.recode__.btime.split(" ")[0];
        this.Time_ = this.recode__.btime.split(" ")[1];
      }
    }
  },
  methods: {
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
      const recode_compare = require("lodash");
      const recode_ =
        this.$store.state.radio1 == "支出"
          ? this.$store.state.recodes.find((recode) =>
            recode_compare.isEqual(recode, this.recode)
          )
          : this.$store.state.income_statement.find((recode) =>
            recode_compare.isEqual(recode, this.recode)
          );

      var photo = str; //添加照片数据
      recode_.receipt = photo;
      recode_.isreceipt = true;
      this.recode__ = recode_;
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
    showinfo() {
      console.log("查看收据");
      console.log(this.recode__);
      return this.recode__.receipt
    }
  },
  watch: {
    recode: {
      handler(newV) {
        this.recode = newV;
        this.recode__ = this.recode
        console.log("监视到了")
        console.log(this.recode)
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style lang="less" scoped>
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
  margin-bottom: 0.48rem;

  .info {
    display: flex;
    justify-content: space-between;
    width: 5.58rem;
    height: 0.48rem;

    p {
      color: #6c727f;
      font-family: "Manrope-Regular";
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 0.48rem;
    }
  }

  .Date {
    .result {
      p {
        color: #121826;
        font-family: "Manrope-Regular";
        font-size: 0.28rem;
        font-weight: 400;
        line-height: 0.48rem;
        // text-align: right;
      }
    }
  }

  .Time {
    .result {
      p {
        color: #121826;
        font-family: "Manrope-Regular";
        font-size: 0.28rem;
        font-weight: 400;
        line-height: 0.48rem;
        text-align: right;
      }
    }
  }

  .Receipt {
    .result {
      display: flex;
      justify-content: space-around;
      width: 2.08rem;

      img {
        width: 0.32rem;
        height: 0.32rem;
      }

      p {
        color: #121826;
        font-family: "Manrope-Regular";
        font-size: 0.28rem;
        font-weight: 400;
        line-height: 0.48rem;
        text-align: right;
        cursor: pointer;
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