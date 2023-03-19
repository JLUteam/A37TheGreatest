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
      }

      this.$router.back(-1);
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
