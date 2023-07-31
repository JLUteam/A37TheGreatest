<template>
  <div class="basic">
    <Back></Back>
    <Avatar :recode="$route.query.recode"> </Avatar>
    <StateBar :recode="$route.query.recode"></StateBar>
    <PayState :recode="$route.query.recode"></PayState>
    <Another :recode="$route.query.recode"></Another>
    <button @click="this.delete_">{{ deleteorsave }}</button>
  </div>
</template>
<script>
import axios from "axios";
import Avatar from "@/components/ConsumptionDetails/avatar.vue";
import Back from "@/components/ConsumptionDetails/back.vue";
import StateBar from "@/components/ConsumptionDetails/StateBar.vue";
import PayState from "@/components/ConsumptionDetails/PayState.vue";
import Another from "@/components/ConsumptionDetails/Another.vue";

export default {
  name: "ConsumptionDetails",
  components: { Avatar, Back, StateBar, PayState, Another },
  mounted() {
    this.deleteorsave = !this.$route.query.isphoto ? "删除" : "保存";
  },
  data() {
    return {
      deleteorsave: !this.$route.query.isphoto ? "删除" : "保存",
    };
  },
  methods: {
    getchange(type, val) {
      this.$store.commit("updatarecode_insorouts", [type, val]);
    },

    delete_() {
      console.log("delete_");
      if (this.$route.query.isphoto != null) {
        var dataofim =
          this.$store.state.temp_insorouts === null
            ? this.$route.query.recode
            : this.$store.state.temp_insorouts;
        // console.log("recode");
        // console.log(this.$route.query.recode);
        // console.log("insorouts");
        // console.log(this.$store.state.temp_insorouts);
        console.log(dataofim);
        console.log(dataofim[dataofim.length - 1]);
        var dataofre = dataofim[dataofim.length - 1].receipt;
        console.log("图片地址");
        console.log(dataofre);
        var id_ = dataofim[dataofim.length - 1].id;
        console.log("编号");
        console.log(id_);
        var uid = this.$store.state.userinfo.uid;
        var dataoftr = {
          bname: dataofim[dataofim.length - 1].bname,
          bcategory: dataofim[dataofim.length - 1].bcategory,
          note: dataofim[dataofim.length - 1].note,
          payment: dataofim[dataofim.length - 1].payment,
          amount: dataofim[dataofim.length - 1].amount,
          btime: dataofim[dataofim.length - 1].btime,
          isreceipt: true,
          ispic: false,
          bpic: null,
          usr: uid,
        };
        console.log("信息");
        console.log(dataoftr);
        // if (this.$store.getters.getdeletes.isout === true) {
        axios({
          method: "post",
          url: "https://mineralsteins.icu:8080/a37/outs/", //待加
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: dataoftr, //待加
        }).then(
          (response) => {
            console.log("文字上传");
            this.$store.commit("deleterecodesbyid", id_);
            console.log(response.data);
            this.$store.commit("pushrecodes", response.data);
            var idoflast = response.data.id;
            //       var dataofim = "!!!!"; //待补
            var im = {
              id: idoflast,
              data: dataofre,
            };
            console.log(im);
            axios({
              method: "post",
              url: "https://mineralsteins.icu:8080/a37/outs-pic-post",
              headers: {
                "Content-Type": "multipart/form-data",
              },
              data: im,
            }).then(
              (response) => {
                console.log("图片上传");
                this.$store.commit("updatereceipt", [true, idoflast, dataofre]);
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
              (erroe) => { }
            );
          },
          (error) => {
            console.log(error);
          }
        );
        // }
      } else {
        if (this.deleteorsave == "删除") {
          this.$store.commit("delete_intsorouts", this.$route.query.recode);
          console.log(this.$store.getters.getdeletes);
          if (this.$store.getters.getdeletes.isout === true) {
            axios({
              method: "delete",
              url:
                "https://mineralsteins.icu:8080/a37/outs/" +
                this.$store.getters.getdeletes.id +
                "/",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }).then(
              (response) => {
                console.log("success");
              },
              (error) => {
                console.log(error);
              }
            );
          } else {
            axios({
              method: "delete",
              url:
                "https://mineralsteins.icu:8080/a37/ins/" +
                this.$store.getters.getdeletes.id +
                "/",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }).then(
              (response) => {
                console.log("success");
              },
              (error) => {
                console.log(error);
              }
            );
          }

          this.$store.state.deletes = {
            id: "-1",
            isout: true,
          };
          console.log("删除");
          this.$alert("", "删除成功", {
            confirmButtonText: "确定",
            showClose: false,
            center: true,
            type: "success",
            customClass: "success",
            beforeClose: (action, instance, done) => {

              if (action === "confirm") {

                console.log(action);
                this.$router.push({
                  name: "Percent",
                });
                done();
              } else {

                console.log(action);
              }
            },
          });
        } else {
          console.log("保存");
          this.$store.commit("save_insorouts");
          console.log("yyyyyyyyyyy");
          console.log(this.$store.getters.getchanges);
          var kv = {};
          var len = this.$store.getters.getchanges.keys.length;
          console.log(len);
          for (var i = 0; i < len; i++) {
            var key = this.$store.getters.getchanges.keys[i];
            var value = this.$store.getters.getchanges.newvals[i];
            kv[key] = value;
          }
          console.log(kv);
          let id = this.$store.getters.getchanges.id;
          if (this.$store.getters.getchanges.isout === true) {
            axios({
              method: "patch",
              url: "https://mineralsteins.icu:8080/a37/outs/" + id + "/",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: kv,
            }).then(
              (response) => {
                console.log("success");
              },
              (error) => {
                console.log(error);
              }
            );
          } else {
            axios({
              method: "patch",
              url: "https://mineralsteins.icu:8080/a37/ins/" + id + "/",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              data: kv,
            }).then(
              (response) => {
                console.log("success");
              },
              (error) => {
                console.log(error);
              }
            );
          }
          this.$store.state.changes = {
            keys: [],
            newvals: [],
            id: "-1",
            isout: true,
          };
          this.$alert("", "修改成功", {
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
        }
      }
    },
    isupdate() {
      this.deleteorsave = "保存";

    },
  },
};
</script>
<style lang='less' scoped>
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
