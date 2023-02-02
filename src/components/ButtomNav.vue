<template>
  <div class="buttom">
    <div class="nav">
      <div class="ButtomNav__menu">
        <ul class="nav_list">
          <li class="nav__item">
            <router-link
              class="nav__link"
              :to="{
                name: 'home',
              }"
            >
              <img :src="img.home" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link
              class="nav__link"
              :to="{
                name: 'Percent',
              }"
            >
              <img :src="img.Percent" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item"></li>
          <li class="nav__item_s">
            <div :class="mood" @click="updatemood()">
              <img src="@/assets/svg/add-bold.svg" class="item_s" alt="" />
            </div>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="Notification">
              <img :src="img.Notification" class="item" alt="" />
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="nav__link" to="person">
              <img :src="img.user_Home" class="item" alt="" />
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="addmethod" v-show="this.mood === 'add' ? false : true">
      <div class="method">
        <img src="@/assets/svg/文本.svg" class="icon" alt="" />
        <p>文本输入</p>
      </div>
      <div class="method" @click="cameratakephoto">
        <img src="@/assets/svg/照相机.svg" class="icon" alt="" />
        <p>相机输入</p>
      </div>
      <div class="method" @click="phototakefromku">
        <img src="@/assets/svg/文本.svg" class="icon" alt="" />
        <p>相册输入</p>
      </div>
    </div>
  </div>
</template>
<script>
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
      case "Notification":
        this.img.Percent = require("@/assets/svg/Notification" + "_active.svg");
        break;
      case "person":
        this.img.user_Home = require("@/assets/svg/person" + "_active.svg");
        break;
      default:
        break;
    }
  },
  methods: {
    updatemood() {
      this.mood = this.mood === "add" ? "add active" : "add";
    },
    cameratakephoto() {
      this.camera(Vue.cordova.camera.PictureSourceType.CAMERA);
    },
    phototakefromku() {
      this.camera(Vue.cordova.camera.PictureSourceType.PHOTOLIBRARY);
    },
    camera(sourceType) {
      Vue.cordova.camera.getPicture(this.onSuccess, this.onFail, {
        quality: 75,
        destinationType: Vue.cordova.camera.DestinationType.DATA_URL,
        sourceType: sourceType,
        allowEdit: true,
      });
    },
    onSuccess(imageURL) {
      alert("上传成功");
    },
    onFail(message) {
      alert("上传失败:" + message);
    },
  },
};
</script>
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
          margin-bottom: 1.3rem;
          cursor: pointer;

          .add {
            display: flex;
            flex-direction: column;
            align-items: center;
            row-gap: 0.08rem;

            .item_s {
              display: flex;
              align-self: flex-start;
              width: 1.28rem;
              height: 1.28rem;
              border-radius: 0.8186rem;
              background: #928fff;
            }
          }
        }

        .active {
          transform: rotate(-45deg);
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