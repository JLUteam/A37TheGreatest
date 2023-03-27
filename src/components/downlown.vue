<template>
  <div class="downlown">

    <div class="logo">

      <img src="../assets/img/suixinji.d4542541.png" alt="logo">
      <p>随心记</p>

    </div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">下载</el-menu-item>
      <el-menu-item index="2">隐私</el-menu-item>
      <el-menu-item index="3">加入我们</el-menu-item>
    </el-menu>
    <div class="huandeng">


      <el-carousel>
        <el-carousel-item v-for="item in imgs" :key="item" ind>
          <img :src="item" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="left">

      <sapn class="title">

        <h2> 随心记</h2>
        <img src="../assets/img/suixinji.d4542541.png" alt="" class="logo">
      </sapn>
      <div class="content">
        <h1> 体验强大且清晰的记账方式</h1>
      </div>
      <div class="btn-downlond">
        <div class="mask"> 立即下载 </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'downlown',
  data() {
    return {
      activeIndex: '1',
      imgs: [require('@/assets/img/1.jpg'), require('@/assets/img/2.jpg'), require('@/assets/img/3.jpg'), require('@/assets/img/4.jpg'), require('@/assets/img/5.jpg'), require('@/assets/img/6.jpg')]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      if (key == '2') {
        this.$router.push({
          name:'secret'
        })
      }
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>
.downlown {
  background: url(https://webgradients.com/public/webgradients_png/002%20Night%20Fade.png) 0 0 no-repeat;

  a {
    text-decoration: none;
  }

  .logo {
    display: flex;
    align-items: center;
    position: absolute;
    left: 7%;
    z-index: 100;
    width: 200;

    img {
      width: 1rem;
      height: .7rem;
    }

    p {
      margin-left: -10px;
      display: inline-block;
      color: #000;
    }
  }

  .huandeng {
    width: 3.9rem;
    margin-left: 2rem;
    margin-top: .5rem;

    img {
      width: 375px;
      height: 812px;
    }

    /deep/ .el-carousel__container {
      position: relative;
      width: 3.9rem;
      height: 10rem;
    }
  }

  /deep/ .el-menu {
    border-right: solid 1px #e6e6e6;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 19rem !important;
    background-color: transparent;
    border: none;

  }

  /deep/.el-carousel__arrow--left {
    margin-left: -.15rem !important;
  }

  /deep/ .el-carousel__indicators {
    // 指示灯位置
    display: none;
  }

  /deep/ .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid transparent;
    color: #303133;
  }

  .left {
    position: absolute;
    top: 30%;
    left: 40%;

    .title {

      line-height: 50px;
      display: flex;
      align-items: baseline;
      font-weight: 400;
      font-size: 40px;
      margin-left: 0rem;

      .logo {
        width: 1.5rem;
        height: 1.2rem;
        position: absolute;

        margin-top: -.3rem;
        margin-left: -1.5rem;
      }
    }

    .btn-downlond {
      width: 300px;
      height: 70px;
      margin-left: 2px;
      margin-top: 12px;
      border-radius: 40px;
      background-color: #00beff;
      position: relative;
      overflow: hidden;

      .mask {
        position: absolute;
        z-index: 4;
        width: 100%;
        height: 100%;
        text-align: center;
        line-height: 70px;
        font-size: 30px;
        color: #fff;
        background-position: -300px;
        border-radius: 40px;
        transition: all .25s ease-in-out;
        background: url(https://qq-web.cdn-go.cn/im.qq.com_hybrid_h5_v2/b5314e70/app/pcqq/dist/cdn/assets/images/btn-line.png) -300px 50% no-repeat;

      }
    }
  }



}
</style>