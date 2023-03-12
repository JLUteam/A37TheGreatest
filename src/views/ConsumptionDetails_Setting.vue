<template>
  <div class="basic">
    <Back></Back>
    <Avatar
      :bcategory="$route.query.bcategory"
      :Ispay="$route.query.Ispay"
      :img_="$route.query.img"
      ref="Avatar"
    >
    </Avatar>
    <StateBar
      :bcategory="$route.query.bcategory"
      :Ispay="$route.query.Ispay"
      ref="StateBar"
    ></StateBar>
    <PayState
      :bcategory="$route.query.bcategory"
      :Ispay="$route.query.Ispay"
      ref="PayState"
    ></PayState>
    <Another
      :bcategory="$route.query.bcategory"
      :Ispay="$route.query.Ispay"
      ref="Another"
    ></Another>
    <button @click="uplode">保存</button>
  </div>
</template>
<script>
import Avatar from "@/components/ConsumptionDetails_Setting/avatar.vue";
import Back from "@/components/ConsumptionDetails_Setting/back.vue";
import StateBar from "@/components/ConsumptionDetails_Setting/StateBar.vue";
import PayState from "@/components/ConsumptionDetails_Setting/PayState.vue";
import Another from "@/components/ConsumptionDetails_Setting/Another.vue";
import axios from "axios";

export default {
  name: "ConsumptionDetails_Setting",
  components: { Avatar, Back, StateBar, PayState, Another },
  mounted() {
    // console.log(this.$route.query);
  },
  methods: {
    uplode() {
      //支出
      let Ispay = this.$route.query.Ispay;
      let recode_new;
      if (Ispay) {
        recode_new = {
          usr: this.$store.state.userinfo.uid,
          bname: this.$refs.Avatar.getname_(),
          isbpic: false,
          bpic: null,
          isfinish: true,
          isremind: false,
          rtime: null,
          bcategory: this.$refs.StateBar.getbcategory_(),
          note: this.$refs.StateBar.getAdd_note(),
          payment: this.$refs.PayState.getpayment_(),
          btime:
            this.$refs.Another.getDate_() + " " + this.$refs.Another.getTime_(),
          amount: this.$refs.PayState.geAmount_(),
          isreceipt: false,
          receipt: null,
        };
        console.log(recode_new);
        axios({
          method: "post",
          url: "https://mineralsteins.icu:8080/a37/outs/", //待加
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: recode_new,
        }).then(
          (response) => {
            console.log(response.data);
            this.$alert("", "上传成功", {
              confirmButtonText: "确定",
              showClose: false,
              center: true,
              type: "success",
              customClass: "success",
              beforeClose: (action, instance, done) => {
                if (action === "confirm") {
                  this.$router.push({
                    name: "Percent",
                  });
                  done();
                }
              },
            });
          },
          (error) => {
            console.log(error);
            this.$alert(error, "上传失败", {
              confirmButtonText: "确定",
              showClose: false,
              center: true,
              type: "warning",
              customClass: "fail",
            });
          }
        );
      } else {
        //收入
        recode_new = {
          usr: this.$store.state.userinfo.uid,
          bname: this.$refs.Avatar.getname_(),
          ispic: false,
          // bpic: this.$refs.Avatar.getimg_(),
          bpic: null,
          bcategory: this.$refs.StateBar.getbcategory_(),
          note: this.$refs.StateBar.getAdd_note(),
          payment: this.$refs.PayState.getpayment_(),
          amount: this.$refs.PayState.geAmount_(),
          btime:
            this.$refs.Another.getDate_() + " " + this.$refs.Another.getTime_(),
          isreceipt: false,
          receipt: null,
        };
      }
      console.log(recode_new);
      axios({
        method: "post",
        url: "https://mineralsteins.icu:8080/a37/ins/", //待加
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: recode_new,
      }).then(
        (response) => {
          console.log(response.data);
          this.$alert("", "上传成功", {
            confirmButtonText: "确定",
            showClose: false,
            center: true,
            type: "success",
            customClass: "success",
            beforeClose: (action, instance, done) => {
              if (action === "confirm") {
                this.$router.push({
                  name: "Percent",
                });
                done();
              }
            },
          });
        },
        (error) => {
          console.log(error);
          console.log(error);
          this.$alert(error, "上传失败", {
            confirmButtonText: "确定",
            showClose: false,
            center: true,
            type: "warning",
            customClass: "fail",
          });
        }
      );
        this.$store.commit("pushrecodes", recode_new);


    },
  },
};
</script >
<style lang="less" scoped>
.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    position: relative;
    width: 6.54rem;
    height: 1.28rem;
    border-radius: 0.48rem;
    background: #928fff;

    margin-left: 0.48rem;
    background-blend-mode: normal;
    border: none;
    color: #ffffff;
    font-family: Manrope;
    font-size: 0.32rem;
    font-weight: 700;
    line-height: 0.52rem;
    text-align: center;
    transition: 0.3s;
    cursor: pointer;
    margin-top: 0.32rem;
  }
}
</style>
