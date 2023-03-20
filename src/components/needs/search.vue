<template>
  <div class="basic">
    <div class="container">
      <div class="icon">
        <img :src="require('@/assets/svg/search_.svg')" alt="" />
      </div>
      <input
        type="text"
        class="search"
        placeholder="此处输入待搜索的信息"
        v-model="search_"
      />
    </div>

    <div class="tip">
      <p class="mingxi">已选:</p>
    </div>
    <div class="recodes_border">
      <div class="recordsets">
        <div
          class="record"
          v-for="recode in this.recodes_seleced"
          :key="recode.btime"
        >
          <img :src="recode.bpic" class="merchantAvatar" />
          <div class="middle">
            <p class="merchantname">{{ recode.bname }}</p>
            <p class="ShoppingTime">{{ recode.btime }}</p>
          </div>
          <img
            class="jian"
            :src="require('@/assets/svg/jian1.svg')"
            @click="jian(recode)"
          />
          <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
        </div>
        <div class="temp2"></div>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="tip2">
      <p class="mingxi">未选:</p>
    </div>
    <div class="recodes_border2">
      <div class="recordsets">
        <div class="record" v-for="recode in recodes" :key="recode.btime">
          <img :src="recode.bpic" class="merchantAvatar" />
          <div class="middle">
            <p class="merchantname">{{ recode.bname }}</p>
            <p class="ShoppingTime">{{ recode.btime }}</p>
          </div>
          <img
            class="jian"
            :src="require('@/assets/svg/add_1.svg')"
            @click="add(recode)"
          />
          <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
        </div>
        <div class="temp2"></div>
      </div>
    </div>
    <div class="save">
      <button class="save_button" @click="toshare_()">确认</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search_need",
  data() {
    return {
      search_: "",
    };
  },
  components: {},
  methods: {
    add(recode) {
      this.$store.commit("jian_searchResult", recode);
      this.$store.commit("add_selectedItems", recode);
    },
    jian(recode) {
      this.$store.commit("jian_selectedItems", recode);
      this.$store.commit("add_SearchResult", recode);
    },
    toshare_() {
      this.$router.push({
        name: "share",
        query: {
          recode: this.recodes_seleced,
        },
      });
    },
  },
  computed: {
    recodes: {
      get() {
        // this.$store.dispatch('searchIncome', this.search_);

        return this.$store.getters.searchResult;
      },
      set() {
        return this.$store.getters.searchResult;
      },
    },
    recodes_seleced: {
      get() {
        return this.$store.getters.getselectedItems;
      },
      set() {
        return this.$store.getters.getselectedItems;
      },
    },
  },
  watch: {
    search_: {
      handler: function (newval, oldval) {
        // console.log('xxxxxxx');
        this.$store.dispatch("searchIncome", newval);
      },
      immediate: true,
    },
  },
};
</script>
<style lang="less" scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .container {
    height: 20%;
    width: 90%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: 0.3rem;

    .icon {
      height: 1.28rem;
      width: 1.28rem;
      box-sizing: border-box;
      padding: 5px;
      background: #f4f4f6;
      border-radius: 0.32rem 0 0 0.32rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        height: 0.64rem;
        width: 0.64rem;
      }
    }

    .search {
      border: 1px solid #ccc;
      width: 90%;
      height: 1.28rem;
      // padding-left: 0.96rem;
      background: none;
      outline: none;
      z-index: 1;
      border-radius: 0 0.32rem 0.32rem 0;
      background: #f4f4f6;
      background-blend-mode: normal;
      border: none;
      font-weight: 500;
      font-size: 0.32rem;
    }

    // input {
    //     border: none;
    //     cursor: pointer;
    //     width: 100%;
    //     height: 100%;
    //     padding: .5rem 0;
    // }
  }

  .tip {
    display: flex;
    justify-content: start;
    align-self: center;
    margin-top: 0.4rem;

    .mingxi {
      font-size: 0.28rem;
      font-weight: 500;

      margin-right: 5.6rem;
    }
  }

  .recodes_border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    height: 3.5rem;

    .recordsets {
      width: 6.54rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-bottom: .2rem;
      height: 4rem;
      // margin-top: 6.5rem;

      .record {
        width: 6.54rem;
        height: 0.96rem;
        border-color: #ffffff;
        margin-bottom: 0.3rem;
        display: flex;
        cursor: pointer;

        .jian {
          margin-left: 1.95rem;
          width: 0.48rem;
          height: 0.48rem;
          margin-top: 0.2rem;
          cursor: pointer;
        }

        .merchantAvatar {
          width: 0.96rem;
          height: 0.96rem;
          border-radius: 0.48rem;
        }

        .middle {
          height: 1.3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;

          .merchantname {
            width: 2rem;
            height: 0.52rem;
            color: #121826;
            font-family: Manrope;
            font-size: 0.32rem;
            font-weight: 700;
            line-height: 0.26rem;
            margin-left: 0.5rem;
            // margin-top: -.2rem;
            margin-bottom: 0.4rem;
          }

          .ShoppingTime {
            display: inline-block;
            margin-top: -0.5rem;
            height: 0.32rem;
            color: #6c727f;
            font-family: Manrope;
            font-size: 0.24rem;
            font-weight: 400;
            line-height: 0.32rem;
            margin-left: 0.5rem;
          }
        }

        .consumption {
          position: relative;
          color: #932205;
          font-family: Manrope;
          font-size: 0.32rem;
          font-weight: 700;
          line-height: 0.52rem;
          text-align: right;
          margin-top: 0.2rem;
          margin-left: -2rem;
        }
      }
    }
  }

  .tip2 {
    display: flex;
    justify-content: start;
    align-self: center;
    margin-top: -0.3rem;
    margin-bottom: 0.3rem;

    .mingxi {
      font-size: 0.28rem;
      font-weight: 500;

      margin-right: 5.6rem;
    }
  }

  .recodes_border2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
    height: 3.5rem;

    .recordsets {
      width: 6.54rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-bottom: .2rem;
      height: 4rem;
      // margin-top: 6.5rem;

      .record {
        width: 6.54rem;
        height: 0.96rem;
        border-color: #ffffff;
        margin-bottom: 0.3rem;
        display: flex;
        cursor: pointer;

        .jian {
          margin-left: 1.95rem;
          width: 0.48rem;
          height: 0.48rem;
          margin-top: 0.2rem;
          cursor: pointer;
        }

        .merchantAvatar {
          width: 0.96rem;
          height: 0.96rem;
          border-radius: 0.48rem;
        }

        .middle {
          height: 1.3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;

          .merchantname {
            width: 2rem;
            height: 0.52rem;
            color: #121826;
            font-family: Manrope;
            font-size: 0.32rem;
            font-weight: 700;
            line-height: 0.26rem;
            margin-left: 0.5rem;
            // margin-top: -.2rem;
            margin-bottom: 0.4rem;
          }

          .ShoppingTime {
            display: inline-block;
            margin-top: -0.5rem;
            height: 0.32rem;
            color: #6c727f;
            font-family: Manrope;
            font-size: 0.24rem;
            font-weight: 400;
            line-height: 0.32rem;
            margin-left: 0.5rem;
          }
        }

        .consumption {
          position: relative;
          color: #932205;
          font-family: Manrope;
          font-size: 0.32rem;
          font-weight: 700;
          line-height: 0.52rem;
          text-align: right;
          margin-top: 0.2rem;
          margin-left: -2rem;
        }
      }
    }
  }

  // .temp2{
  //     height: .5rem;
  // }
  .save {
    cursor: pointer;

    .save_button {
      width: 6.54rem;
      height: 1.28rem;
      border-radius: 0.48rem;
      background: #fff;
      border: 0.1rem solid #f4f4f6;
      color: #4a44c6;
      font-family: Manrope;
      font-size: 0.32rem;
      font-weight: 700;
      line-height: 0.52rem;
      text-align: center;
      transition: background 0.3s;
      background: #e9e9ff;
      border: 0.1rem solid #e9e9ff;
      opacity: 0.7;
      transition: opacity 0.1s;
    }

    .save_button:hover {
      opacity: 1;
    }
  }
}
</style>