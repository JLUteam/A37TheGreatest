<template>
  <div class="User">
    <img :src="img" alt="" />
    <div class="pie">
      <div class="smallpie">
        <el-button type="text" @click="open()">
          <img src="@/assets/svg/photo2.svg" alt="" />
        </el-button>
      </div>
    </div>

    <div class="word">
      <p class="name">{{ this.$store.state.userinfo.uname }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      img: this.$store.state.userinfo.upic,
      //   img: "@/assets/img/avast.png",
    };
  },
  methods: {
    open() {
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
    },
    //拍照
    cameratakephoto() {
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,
        // allowEdit: true,
        encodingType: navigator.camera.EncodingType.JPEG,
        // destinationType: navigator.camera.DestinationType.DATA_URL,
        destinationType: navigator.camera.DestinationType.FILE_URI,
      });
    },
    phototakefromku() {
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,
        // destinationType: navigator.camera.DestinationType.DATA_URL,
        destinationType: navigator.camera.DestinationType.FILE_URI,
        encodingType: navigator.camera.EncodingType.JPEG,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
        // allowEdit: true,
        // saveToPhotoAlbum: true,
      });
    },
    onSuccess(imageURL) {
      console.log(imageURL);
      // alert("data:image/jpeg;base64," + imageURL);
      // var str = "data:image/jpeg;base64," + imageURL;
      var str = imageURL;
      this.img = str;
      this.$store.state.userinfo.upic = str;
      // axios({
      //   method: "post",
      //   url: "http://mineralsteins.icu:8081/a37/string-get",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //   data: { data: str },
      // }).then(
      //   (response) => {
      //     console.log(response.data);
      //   },
      //   (error) => {
      //     console.log(error);
      //   }
      // );
      // this.$alert("", "上传成功", {
      //   confirmButtonText: "确定",
      //   showClose: false,
      //   center: true,
      //   type: "success",
      //   customClass: "success",
      // });
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
  },
  computed: {},
};
</script>
<style>
.fail {
  width: 300px !important;
}

.photo {
  width: 300px !important;
}
</style>
<style lang="less" scoped>
.User {
  width: 4.8rem;
  height: 1.6rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 2.6rem;

  .pie {
    position: absolute;
    margin-top: 1.6rem;
    margin-left: -1.1rem;
    width: 0.9rem;
    height: 0.75rem;
    border-radius: 0.75rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .smallpie {
      width: 0.7rem;
      height: 0.6rem;
      border-radius: 0.5rem;
      background: #928fff;
      border-radius: 0.425rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 0.5rem;
        height: 0.4rem;
      }
    }
  }

  img {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 0.8rem;
  }

  .word {
    height: 1.6rem;

    .name {
      margin-top: 0.5rem;
      color: #121826;
      font-family: Manrope;
      font-size: 0.64rem;
      font-weight: 700;
      line-height: 0.52rem;
    }

    .name {
      margin-top: 0.5rem;
      color: #121826;
      font-family: Manrope;
      font-size: 0.64rem;
      font-weight: 700;
      line-height: 0.52rem;
    }

    .iphone {
      margin-top: 0.25rem;
      color: #6c727f;
      font-family: Manrope;
      font-size: 0.24rem;
      font-weight: 400;
      line-height: 0.32rem;
    }
  }
}
</style>