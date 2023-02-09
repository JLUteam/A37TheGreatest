<template>
    <div class="User">
        <img :src="img" alt="">
        <div class="pie" @click="photo">
            <div class="smallpie">

                <el-button type="text" @click="open()">

                    <img src="@/assets/svg/photo2.svg" alt="">
                </el-button>

            </div>
        </div>

        <div class="word">
            <p class="name">{{ this.$store.state.userinfo.uname }}</p>

        </div>
    </div>
    <div class="word">
      <p class="name">{{ this.$store.state.userinfo.uname }}</p>
      <!-- <p class="iphone">{{ this.$store.state.userinfo.uphone }}</p> -->
    </div>
  </div>
</template>
<script>
export default {
    name: 'User',
    data() {
        return {
            img: (this.$store.state.userinfo.upic)
        }
    }
    ,
    methods: {
        open() {
            this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '保存',
                cancelButtonText: '放弃修改',
                center: true,
                customClass: 'photo'
            })
                .then(() => {
                    this.$message({
                        type: 'info',
                        message: '保存修改'
                    });
                })
                .catch(action => {
                    this.$message({
                        type: 'info',
                        message: action === 'cancel'
                            ? '放弃保存并离开页面'
                            : '停留在当前页面'
                    })
                });
        }

    },
    computed: {

    }
}
</script>
<style>
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
    left: 20%;
    top: 16%;
    width: 0.9rem;
    height: 0.75rem;
    border-radius: 0.75rem;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2.6rem;

    .pie {
        position: absolute;
        margin-top: .7rem;
        margin-left: -.6rem;
        width: .9rem;
        height: .75rem;
        border-radius: .75rem;
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
                width: .5rem;
                height: .4rem;
            }

          
        }
    }

    img {
        width: 1.6rem;
        height: 1.6rem;
    }
  }
  img {
    width: 1.6rem;
    height: 1.6rem;
  }

    .word {
        height: 1.6rem;

        .name {
            margin-top: .5rem;
            color: #121826;
            font-family: Manrope;
            font-size: .64rem;
            font-weight: 700;
            line-height: .52rem;
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