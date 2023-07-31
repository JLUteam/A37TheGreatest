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
        <img src="@/assets/svg/album3.svg" class="icon" alt="" />
        <p>相册输入</p>
      </div>
      <div class="method" @click="tovoiceinput">
        <img src="@/assets/svg/yuying.svg" class="icon" alt="" />
        <p>语音录入</p>
      </div>
      <div class="method" @click="tomorepic">
        <img src="@/assets/svg/photos.svg" class="icon" alt="" />
        <p>多图录入</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Compressor from "compressorjs";
import { time } from "echarts";
import { resolve } from "vue-cordova";
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
      all_info: [],
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
      // eslint-disable-next-line no-unused-vars
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
      console.log(str);
      let targetObj = {
        src: str,
      };
      vm.compressImg(targetObj.src, 0.5, this.useImg, targetObj);

      // axios({
      //   mothed : "post",
      //   url : "https://mineralsteins.icu:8080/a37/recog-post"

      // })
      // var pblob = this.dataURLtoBlob(str);

      // var reader = new FileReader();
      // reader.readAsArrayBuffer(pblob);
      // reader.onload = function () {
      //   console.log(this.result);
      //   // axios({
      //   //   method: "post",
      //   //   url: "https://api.textin.com/robot/v1.0/api/receipt",
      //   //   headers: {
      //   //     "x-ti-app-id": "6b07d2d756f3be15198633de37dcc852",
      //   //     "x-ti-secret-code": "a38872198de6545a6464969c71ef1272",
      //   //     "Content-Type": "application/octet-stream",
      //   //   },
      //   //   data: this.result,
      //   // }).then(
      //   //   (response) => {
      //   //     console.log(response.data.result.item_list);
      //   //     var dataofimage = {
      //   //       bname: response.data.result.item_list[3].value,
      //   //       bcategory: "餐饮",
      //   //       note: response.data.result.item_list[5].value,
      //   //       payment: "支付宝",
      //   //       amount: response.data.result.item_list[0].value,
      //   //       btime: response.data.result.item_list[1].value,
      //   //       isreceipt: true,
      //   //       receipt: str,
      //   //       ispic: true,
      //   //       bpic: null,
      //   //       usr: usr,
      //   //       id: id,
      //   //     };
      //   //     vm.$store.state.recodes.push(dataofimage);
      //   //     if (dataofimage.bpic == null) {
      //   //       switch (dataofimage.bcategory) {
      //   //         case "餐饮":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/canyin.svg");
      //   //           break;
      //   //         case "服饰":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/fushi.svg");
      //   //           break;
      //   //         case "公交":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongjiao.svg");
      //   //           break;
      //   //         case "工作":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongzuo.svg");
      //   //           break;
      //   //         case "购物":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gouwu.svg");
      //   //           break;
      //   //         case "居家":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/jujia.svg");
      //   //           break;
      //   //         case "礼物":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/liwu.svg");
      //   //           break;
      //   //         case "旅行":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/lvhang.svg");
      //   //           break;
      //   //         case "学习":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/xuexi.svg");
      //   //           break;
      //   //         case "美容":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg");
      //   //           break;
      //   //         case "日用":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/riyongpin.svg");
      //   //           break;
      //   //         case "蔬菜":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shucai.svg");
      //   //           break;
      //   //         case "水果":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shuiguo.svg");
      //   //           break;
      //   //         case "通讯":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg");
      //   //           break;
      //   //         case "娱乐":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yule.svg");
      //   //           break;
      //   //         case "运动":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yundong.svg");
      //   //           break;
      //   //         case "其他":
      //   //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shezhi.svg");
      //   //           break;
      //   //         default:
      //   //           break;
      //   //       }
      //   //     }
      //   //     console.log(dataofimage);

      //   //     console.log(vm);
      //   //     vm.$router.push({
      //   //       name: "ConsumptionDetails",
      //   //       query: {
      //   //         recode: dataofimage,
      //   //         isphoto: true,
      //   //       },
      //   //     });
      //   //   },
      //   //   (error) => {
      //   //     console.log(error.message);
      //   //   }
      //   // );
      // };
    },
    // eslint-disable-next-line no-unused-vars
    onFail(message) {
      this.$alert("", "上传失败", {
        confirmButtonText: "确定",
        showClose: false,
        center: true,
        type: "warning",
        customClass: "fail",
      });
    },

    compressImg(base64, multiple, useImg, targetObj) {
      // 第一个参数就是需要加密的base65，
      // 第二个是压缩系数 0-1，
      // 第三个压缩后的回调 用来获取处理后的 base64
      if (!base64) {
        return;
      }
      const length = base64.length / 1024;
      // 压缩方法
      let newImage = new Image();
      let quality = 0.8; // 压缩系数0-1之间
      newImage.src = base64;
      newImage.setAttribute("crossOrigin", "Anonymous"); // url为外域时需要
      let imgWidth, imgHeight;
      let w = undefined;
      newImage.onload = function () {
        // 这里面的 this 指向 newImage
        // 通过改变图片宽高来实现压缩
        w = this.width * multiple;
        imgWidth = this.width;
        imgHeight = this.height;
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        if (Math.max(imgWidth, imgHeight) > w) {
          if (imgWidth > imgHeight) {
            canvas.width = w;
            // 等比例缩小
            canvas.height = w * (imgHeight / imgWidth);
          } else {
            canvas.height = w;
            // 等比例缩小
            canvas.width = w * (imgWidth / imgHeight);
          }
        } else {
          canvas.width = imgWidth;
          canvas.height = imgHeight;
          // quality 设置转换为base64编码后图片的质量，取值范围为0-1  没什么压缩效果
          // 还是得通过设置 canvas 的宽高来压缩
          quality = 0.6;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height); //  // 这里面的 this 指向 newImage
        let smallBase64 = canvas.toDataURL("image/jpeg", quality); // 压缩语句
        // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
        while (smallBase64.length / 1024 > 150) {
          quality -= 0.01;
          smallBase64 = canvas.toDataURL("image/jpeg", quality);
        }
        // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
        while (smallBase64.length / 1024 < 50) {
          quality += 0.001;
          smallBase64 = canvas.toDataURL("image/jpeg", quality);
        }

        // 必须通过回调函数返回，否则无法及时拿到该值，回调函数异步执行
        console.log(`压缩前：${length}KB`);
        console.log(`压缩后：${smallBase64.length / 1024} KB`);

        useImg(smallBase64, targetObj);
      };
    },
    useImg(base64, targetObj) {
      console.log("压缩后的 base64 :", base64);
      console.log(base64.length);
      this.uploadImg(base64);
    },

    uploadImg(base64) {
      console.log("上传");
      console.log(base64);
      var usr = this.$store.state.userinfo.uid;
      var id =
        this.$store.state.recodes
          .map((item) => item.id)
          .reduce((a, b) => Math.max(a, b)) + 1;
      var vm = this;
      axios({
        method: "post",
        url: "https://mineralsteins.icu:8080/a37/recog-post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: { data: base64 },
      }).then(
        (response) => {
          var am = response.data.amount;
          console.log("-------------");
          console.log(typeof am);
          if (typeof am === "string") {
            am = parseFloat(am);
          }
          console.log(response.data);
          var dataofimage = {
            bname: response.data.shop_name,
            bcategory: "餐饮",
            note: response.data.product_name,
            payment: "支付宝",
            amount: am,
            btime: response.data.time,
            isreceipt: true,
            receipt: base64,
            ispic: true,
            bpic: null,
            usr: usr,
            id: id,
          };
          vm.$store.state.recodes.push(dataofimage);
          if (dataofimage.bpic == null) {
            switch (dataofimage.bcategory) {
              case "餐饮":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/canyin.svg");
                break;
              case "服饰":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/fushi.svg");
                break;
              case "公交":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongjiao.svg");
                break;
              case "工作":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongzuo.svg");
                break;
              case "购物":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gouwu.svg");
                break;
              case "居家":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/jujia.svg");
                break;
              case "礼物":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/liwu.svg");
                break;
              case "旅行":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/lvhang.svg");
                break;
              case "学习":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/xuexi.svg");
                break;
              case "美容":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg");
                break;
              case "日用":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/riyongpin.svg");
                break;
              case "蔬菜":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shucai.svg");
                break;
              case "水果":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shuiguo.svg");
                break;
              case "通讯":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg");
                break;
              case "娱乐":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yule.svg");
                break;
              case "运动":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yundong.svg");
                break;
              case "其他":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shezhi.svg");
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

      // var pblob = this.dataURLtoBlob(str);

      // var reader = new FileReader();
      // reader.readAsArrayBuffer(pblob);
      // reader.onload = function () {
      //   console.log(this.result);
      // axios({
      //   method: "post",
      //   url: "https://api.textin.com/robot/v1.0/api/receipt",
      //   headers: {
      //     "x-ti-app-id": "6b07d2d756f3be15198633de37dcc852",
      //     "x-ti-secret-code": "a38872198de6545a6464969c71ef1272",
      //     "Content-Type": "application/octet-stream",
      //   },
      //   data: this.result,
      // }).then(
      //   (response) => {
      //     console.log(response.data.result.item_list);
      //     var dataofimage = {
      //       bname: response.data.result.item_list[3].value,
      //       bcategory: "餐饮",
      //       note: response.data.result.item_list[5].value,
      //       payment: "支付宝",
      //       amount: response.data.result.item_list[0].value,
      //       btime: response.data.result.item_list[1].value,
      //       isreceipt: true,
      //       receipt: str,
      //       ispic: true,
      //       bpic: null,
      //       usr: usr,
      //       id: id,
      //     };
      //     vm.$store.state.recodes.push(dataofimage);
      //     if (dataofimage.bpic == null) {
      //       switch (dataofimage.bcategory) {
      //         case "餐饮":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/canyin.svg");
      //           break;
      //         case "服饰":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/fushi.svg");
      //           break;
      //         case "公交":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongjiao.svg");
      //           break;
      //         case "工作":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongzuo.svg");
      //           break;
      //         case "购物":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gouwu.svg");
      //           break;
      //         case "居家":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/jujia.svg");
      //           break;
      //         case "礼物":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/liwu.svg");
      //           break;
      //         case "旅行":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/lvhang.svg");
      //           break;
      //         case "学习":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/xuexi.svg");
      //           break;
      //         case "美容":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg");
      //           break;
      //         case "日用":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/riyongpin.svg");
      //           break;
      //         case "蔬菜":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shucai.svg");
      //           break;
      //         case "水果":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shuiguo.svg");
      //           break;
      //         case "通讯":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg");
      //           break;
      //         case "娱乐":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yule.svg");
      //           break;
      //         case "运动":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yundong.svg");
      //           break;
      //         case "其他":
      //           dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shezhi.svg");
      //           break;
      //         default:
      //           break;
      //       }
      //     }
      //     console.log(dataofimage);

      //     console.log(vm);
      //     vm.$router.push({
      //       name: "ConsumptionDetails",
      //       query: {
      //         recode: dataofimage,
      //         isphoto: true,
      //       },
      //     });
      //   },
      //   (error) => {
      //     console.log(error.message);
      //   }
      // );
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
    tovoiceinput() {
      this.$router.push({
        name: "voiceinput",
      });
    },
   async tomorepic() {
      var vm = this;
      var na = navigator;
      var all_uri = [];
      var len = 0;
      ImagePicker.getPictures(
       async function (result) {
          console.log(result);
          // alert(JSON.stringify(result));
          // var dataofmorepic = JSON.stringify(result);
          // for (var i in dataofmorepic) {
          //   console.log(i);
          // }
          // console.log(dataofmorepic);
          console.log(result.images);
          len = result.images.length;
          console.log(len);
          for (let i = 0; i < len; i++) {
            console.log(result.images[i]);
            var uri = result.images[i].uri;
            console.log(uri);
            all_uri.push(uri);
            // var path_name = vm.splitStringAtLastSlash(uri);
            // console.log(path_name);
            // var path = path_name[0];
            // var nam = path_name[1];
            // console.log(na);
            // console.log(window);
            // console.log(File);
            // console.log(File.readAsDataURL);
            // console.log(file);
            // na.File.readAsDataURL(path, nam).then((result) => {
            //   base64 = result;
            // });
            // var base64 = vm.convertToBase64(uri);
            // console.log(base64);
            // all_uri.push(base64);
          }
       await vm.convertToBase64(all_uri);
          console.log(all_uri);
        },
        function (err) {
          alert(err);
        },
        {
          maximumImagesCount: 9,
        }
      );
      console.log("--------------all_info----------------");
      console.log(this.all_info);
      if (this.all_info.length === len) {
        vm.$router.push({
          name: "ConsumptionDetails_duotu",
          query: {
            recode: this.all_info,
            isphoto: true,
          },
        });
      }

    },
    splitStringAtLastSlash(str) {
      const lastSlashIndex = str.lastIndexOf("/");
      if (lastSlashIndex === -1) {
        // 如果字符串中没有斜杠，则直接返回原字符串作为第一个子字符串，第二个子字符串为空字符串
        return [str, ""];
      } else {
        // 使用slice方法将字符串分割成两个子字符串
        const firstPart = str.slice(0, lastSlashIndex + 1);
        const secondPart = str.slice(lastSlashIndex + 1);
        return [firstPart, secondPart];
      }
    },
   async convertToBase64(imageUrls) {
      this.$alert("有多张图片上传，请稍等...", "上传成功", {
        confirmButtonText: "确定",
        showClose: false,
        center: true,
        type: "success",
        customClass: "success",
      });
      for (var i = 0; i < imageUrls.length; i++) {
        window.resolveLocalFileSystemURL(imageUrls[i], (fileEntry) => {
          fileEntry.file((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
              console.log("------------");
              // console.log(reader.result);
              this.usebase64(reader.result);
            };
            reader.readAsDataURL(file);
          });
        });
      }
    },
    usebase64(base64) {
      console.log("上传");
      // console.log(base64);
      var usr = this.$store.state.userinfo.uid;
      var id =
        this.$store.state.recodes
          .map((item) => item.id)
          .reduce((a, b) => Math.max(a, b)) + 1;
      var vm = this;
      axios({
        method: "post",
        url: "https://mineralsteins.icu:8080/a37/recog-post",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        data: { data: base64 },
      }).then(
        (response) => {
          var am = response.data.amount;
          console.log("-------------");
          console.log(typeof am);
          if (typeof am === "string") {
            am = parseFloat(am);
          }
          console.log(response.data);
          var dataofimage = {
            bname: response.data.shop_name,
            bcategory: "餐饮",
            note: response.data.product_name,
            payment: "支付宝",
            amount: am,
            btime: response.data.time,
            isreceipt: true,
            receipt: base64,
            ispic: true,
            bpic: null,
            usr: usr,
            id: id,
          };
          // vm.$store.state.recodes.push(dataofimage);
          if (dataofimage.bpic == null) {
            switch (dataofimage.bcategory) {
              case "餐饮":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/canyin.svg");
                break;
              case "服饰":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/fushi.svg");
                break;
              case "公交":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongjiao.svg");
                break;
              case "工作":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gongzuo.svg");
                break;
              case "购物":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/gouwu.svg");
                break;
              case "居家":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/jujia.svg");
                break;
              case "礼物":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/liwu.svg");
                break;
              case "旅行":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/lvhang.svg");
                break;
              case "学习":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/xuexi.svg");
                break;
              case "美容":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/meirong-heicopy.svg");
                break;
              case "日用":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/riyongpin.svg");
                break;
              case "蔬菜":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shucai.svg");
                break;
              case "水果":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shuiguo.svg");
                break;
              case "通讯":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/tongxunlu.svg");
                break;
              case "娱乐":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yule.svg");
                break;
              case "运动":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/yundong.svg");
                break;
              case "其他":
                dataofimage.bpic = require("@/assets/svg/icon_ycof0s6ppu/shezhi.svg");
                break;
              default:
                break;
            }
          }
          console.log(dataofimage);
          vm.all_info.push(dataofimage);

          // console.log(vm);
          // vm.$router.push({
          //   name: "ConsumptionDetails",
          //   query: {
          //     recode: dataofimage,
          //     isphoto: true,
          //   },
          // });
        },
        (error) => {
          console.log(error.message);
        }
      );
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
  height: 8.5rem;
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
