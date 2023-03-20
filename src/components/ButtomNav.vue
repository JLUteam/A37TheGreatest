<template>
  <div class="buttom">
    <div class="nav">
      <div class="ButtomNav__menu">
        <ul class="nav_list">
          <li class="nav__item">
            <router-link class="nav__link" :to="{
              name: 'home',
            }">
              <img :src="img.home" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" :to="{
              name: 'Percent',
            }">
              <img :src="img.Percent" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item"></li>
          <li class="nav__item_s">
            <div :class="mood" @click="updatemood()">
              <img src="@/assets/svg/tx-fill-shizixing.svg" class="item_s" alt="" />
            </div>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" :to="{
              name: 'needs',
            }">
              <img :src="img.Notification" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" :to="{
              name: 'person',
            }">
              <img :src="img.user_Home" class="item" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="addmethod" v-show="this.mood === 'add' ? false : true">
      <!-- <input type="file" @change="uploadfile" id="test" /> -->
      <div class="method" @click="tryit">
        <img src="@/assets/svg/text.svg" class="icon" alt="" />
        <p>文本输入</p>
      </div>
      <div class="method" @click="cameratakephoto">
        <img src="@/assets/svg/camera.svg" class="icon" alt="" />
        <p>相机输入</p>
      </div>
      <div class="method" @click="phototakefromku">
        <img src="@/assets/svg/text.svg" class="icon" alt="" />
        <p>相册输入</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "ButtomNav",
  data() {
    return {
      img: {
        home: require("@/assets/svg/home.svg"),
        Percent: require("@/assets/svg/Percent.svg"),
        Notification: require("@/assets/svg/Notification.svg"),
        user_Home: require("@/assets/svg/person.svg"),
      },
      mood: "add",
    };
  },
  mounted() {
    let name = this.$route.name;
    console.log(name);
    switch (name) {
      case "home":
        this.img.home = require("@/assets/svg/home" + "_active.svg");
        break;
      case "Percent":
        this.img.Percent = require("@/assets/svg/Percent" + "_active.svg");
        break;
      case "needs":
        this.img.Notification = require("@/assets/svg/Notification" +
          "_active.svg");
        break;
      case "person":
        this.img.user_Home = require("@/assets/svg/person" + "_active.svg");
        break;
      default:
        break;
    }
  },
  methods: {
    uploadfile() {
      var file = document.getElementById("test").files[0];
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = function (e) {
        var fileData = this.result;
        axios({
          method: "post",
          url: "http://localhost:8080/avatar/upload?uid=0",

          headers: {
            "Content-Type": "multipart/form-data",
            //   "x-ti-app-id": "6b07d2d756f3be15198633de37dcc852",
            //   "x-ti-secret-code": "a38872198de6545a6464969c71ef1272",
            //   // "Content-Type": "image/jpg",
          },
          data: {
            image: fileData,
          },
        }).then(
          (response) => {
            // window.alert(1);
            console.log(response.data);
          },
          (error) => {
            window.alert(error.message);
          }
        );
      };
    },
    updatemood() {
      this.mood = this.mood === "add" ? "add active" : "add";
    },
    cameratakephoto() {
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 50,
        // allowEdit: true,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        encodingType: navigator.camera.EncodingType.JPEG,
      });
    },
    phototakefromku() {
      this.camera(navigator.camera.PictureSourceType.PHOTOLIBRARY);
    },
    tryit() {
      this.$router.push({
        name: "WordInputSetting",
      });
    },
    camera(sourceType) {
      navigator.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 75,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        encodingType: navigator.camera.EncodingType.JPEG,
        sourceType: sourceType,
        // allowEdit: true,
        // saveToPhotoAlbum: true,
      });
    },
    onSuccess(imageURL) {
      let vm = this;
      this.$alert("请稍等...", "上传成功", {
        confirmButtonText: "确定",
        showClose: false,
        center: true,
        type: "success",
        customClass: "success",
      });
      var usr = this.$store.state.userinfo.uid;
      var id =
        this.$store.state.recodes
          .map((item) => item.id)
          .reduce((a, b) => Math.max(a, b)) + 1;
      var str = "data:image/jpeg;base64," + imageURL;
      var pblob = this.dataURLtoBlob(str);
      var reader = new FileReader();
      reader.readAsArrayBuffer(pblob);
      reader.onload = function () {
        console.log(this.result);
        axios({
          method: "post",
          url: "https://api.textin.com/robot/v1.0/api/receipt",
          headers: {
            "x-ti-app-id": "6b07d2d756f3be15198633de37dcc852",
            "x-ti-secret-code": "a38872198de6545a6464969c71ef1272",
            "Content-Type": "application/octet-stream",
          },
          data: this.result,
        }).then(
          (response) => {
            console.log(response.data.result.item_list);
            var dataofimage = {
              bname: response.data.result.item_list[3].value,
              bcategory: "餐饮",
              note: response.data.result.item_list[5].value,
              payment: "支付宝",
              amount: response.data.result.item_list[0].value,
              btime: response.data.result.item_list[1].value,
              isreceipt: true,
              receipt: str,
              ispic: true,
              bpic: null,
              usr: usr,
              // id: id,
            };
            if (dataofimage.bpic == null) {
              switch (dataofimage.bcategory) {
                case '餐饮':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/canyin.svg')
                  break;
                case '服饰':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/fushi.svg')
                  break;
                case '公交':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/gongjiao.svg')
                  break;
                case '工作':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/gongzuo.svg')
                  break;
                case '购物':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/gouwu.svg')
                  break;
                case '居家':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/jujia.svg')
                  break;
                case '礼物':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/liwu.svg')
                  break;
                case '旅行':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/lvhang.svg')
                  break;
                case '学习':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/xuexi.svg')
                  break;
                case '美容':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg')
                  break;
                case '日用':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/riyongpin.svg')
                  break;
                case '蔬菜':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/shucai.svg')
                  break;
                case '水果':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/shuiguo.svg')
                  break;
                case '通讯':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg')
                  break;
                case '娱乐':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/yule.svg')
                  break;
                case '运动':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/yundong.svg')
                  break;
                case '其他':
                  dataofimage.bpic = require('@/assets/svg/icon_ycof0s6ppu/shezhi.svg')
                  break;
                default:
                  break;
              }
            }
            console.log(dataofimage);

            console.log(vm);
            vm.$router.push({
              name: "ConsumptionDetails",
              query: {
                recode: dataofimage,
                isphoto: true,
              },
            });
          },
          (error) => {
            console.log(error.message);
          }
        );
      };
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
    dataURLtoBlob(baseurl) {
      let arr = baseurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new Blob([u8arr], {
        type: mime,
      });
    },
  },
};
</script>
<style>
.fail {
  width: 300px !important;
}

.success {
  width: 300px !important;
}
</style>
<style lang="less" scoped>
.buttom {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-inline: 0.48rem;

    .ButtomNav__menu {
      position: fixed;
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      background-color: #ffffff;
      box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.1);
      transform: bottom 0.3s;

      .nav_list {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.8rem;

        .nav__item {
          height: 1.1rem;
          display: flex;
          align-items: center;

          .nav__link {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 0.08rem;

            .item {
              width: 0.48rem;
              height: 0.48rem;
            }
          }
        }

        .nav__item_s {
          width: 1.2rem;
          height: 1.1rem;
          display: flex;
          align-items: flex-start;
          position: absolute;
          margin-bottom: 1rem;
          cursor: pointer;

          .add {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 0.08rem;
            transition: transform 0.3s;

            .item_s {
              display: flex;
              align-self: flex-start;
              width: 1rem;
              height: 1rem;
              border-radius: 0.8186rem;
              background: #928fff;
            }
          }
        }

        .active {
          transform: rotate(45deg);
          transition: transform 0.3s;
        }
      }
    }
  }
}

.addmethod {
  position: fixed;
  display: flex;
  height: 4.8rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 1.8rem;
  padding-left: 0.48rem;
  padding-right: 0.48rem;
  z-index: 1;
  border-radius: 0.64rem;
  box-shadow: 0 4px 20px hsla(207, 24%, 35%, 0.4);
  background-color: #fff;

  .method {
    position: relative;
    margin-bottom: 0.2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: 0.32rem;
    background: #f4f4f6;
    background-blend-mode: normal;
    border: 0.03rem dashed #e9e9ff;
    transition: background-color 0.3s, border 0.3s;

    .icon {
      width: 0.64rem;
      height: 0.64rem;

      p {
        color: #121826;
        font-family: Manrope;
        font-size: 0.32rem;
        font-weight: 700;
        line-height: 0.52rem;
      }
    }

    &:hover {
      background-color: #e9e9ff;
    }
  }
}
</style>