<template>
  <div class="basic">
    <div class="recodes_border">
      <div class="recordsets" id="share">
        <div
          class="record"
          v-for="recode in this.$store.getters.getselectedItems"
          :key="recode.btime"
        >
          <img :src="recode.bpic" class="merchantAvatar" />
          <div class="middle">
            <p class="merchantname">{{ recode.bname }}</p>
            <p class="ShoppingTime">{{ recode.btime }}</p>
          </div>
          <!-- <img class="jian" :src="require('@/assets/svg/jian1.svg')" @click="jian(recode)"> -->
          <p class="consumption">{{ parseFloat(recode.amount).toFixed(2) }}</p>
        </div>
        <div class="temp2"></div>
      </div>
    </div>
    <div class="save">
      <button class="save_button" @click="share">分享</button>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  name: "share",
  data() {
    return {};
  },
  components: {},
  methods: {
    share() {
      var vm = this;
      html2canvas(document.getElementById("share"), {
        allowTaint: true,
        backgroundColor: "#fff",
        useCORS: true,
      }).then((canvas) => {
        canvas.id = "share";
        let url = canvas.toDataURL("image/png");
        var params = {
          data: url,
          // prefix: "myPrefix_",
          format: "PNG",
          quality: 80,
          mediaScanner: true,
        };
        console.log(window);
        console.log(window.imageSaver);
        var permissions = cordova.plugins.permissions;
        permissions.requestPermission(
          permissions.WRITE_EXTERNAL_STORAGE,
          function (status) {
            if (status.hasPermission) {
              console.log("写权限已有");
              var permissions = cordova.plugins.permissions;
              permissions.requestPermission(
                permissions.READ_EXTERNAL_STORAGE,
                function (status) {
                  if (status.hasPermission) {
                    console.log("存储权限已授予");
                    console.log(params.data);
                    console.log("-----------conmein1----------");
                    vm.saveBase64ImageToGallery(
                      params.data,
                      vm.generateUniqueFileName()
                    );
                  } else {
                    console.log("获取存储权限失败");
                    var permissions = cordova.plugins.permissions;
                    permissions.requestPermission(
                      permissions.READ_EXTERNAL_STORAGE,
                      function (status) {
                        if (status.hasPermission) {
                          console.log("-----------conmein2----------");
                          vm.saveBase64ImageToGallery(
                            params.data,
                            vm.generateUniqueFileName()
                          );
                        } else {
                          console.log("获取存储权限失败");
                        }
                      }
                    );
                  }
                }
              );
            } else {
              console.log("获取存储权限失败");
              var permissions = cordova.plugins.permissions;
              permissions.requestPermission(
                permissions.WRITE_EXTERNAL_STORAGE,
                function (status) {
                  if (status.hasPermission) {
                    console.log("写权限已有");
                    var permissions = cordova.plugins.permissions;
                    permissions.requestPermission(
                      permissions.READ_EXTERNAL_STORAGE,
                      function (status) {
                        if (status.hasPermission) {
                          console.log("存储权限已授予");
                          vm.saveBase64ImageToGallery(
                            params.data,
                            vm.generateUniqueFileName()
                          );
                        } else {
                          console.log("获取存储权限失败");
                          var permissions = cordova.plugins.permissions;
                          permissions.requestPermission(
                            permissions.READ_EXTERNAL_STORAGE,
                            function (status) {
                              if (status.hasPermission) {
                                vm.saveBase64ImageToGallery(
                                  params.data,
                                  vm.generateUniqueFileName()
                                );
                              } else {
                                console.log("获取存储权限失败");
                              }
                            }
                          );
                        }
                      }
                    );
                  } else {
                    console.log("获取写2权限失败");
                  }
                }
              );
            }
          }
        );

        this.$alert("请前往图库进行分享", "照片生成成功", {
          confirmButtonText: "确定",
          showClose: false,
          center: true,
          type: "success",
          customClass: "success",
          beforeClose: (action, instance, done) => {
            if (action === "confirm") {
              this.$store.commit("clearselectedItems", []);
              this.$router.push({
                name: "search",
              });
              done();
            }
          },
        });
      });
    },

    onSuccess(filePath) {
      console.log("success：" + filePath);
    },

    onFail(error) {
      console.log(error);
    },

    saveBase64ImageToGallery(base64Data, fileName) {
      // 将Base64数据转换为Blob对象
      console.log("-----come into function------");
      var byteCharacters = atob(base64Data.split(",")[1]);
      // var byteCharacters = decodeURIComponent(escape(atob(base64Data)));
      var byteNumbers = new Array(byteCharacters.length);
      for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      var blob = new Blob([byteArray], { type: "image/png" });

      // 使用File插件保存图片到相册
      window.resolveLocalFileSystemURL(
        cordova.file.externalRootDirectory,
        function (dirEntry) {
          dirEntry.getDirectory(
            "DCIM/Camera",
            { create: true, exclusive: false },
            function (subDirEntry) {
              subDirEntry.getFile(
                fileName,
                { create: true, exclusive: false },
                function (fileEntry) {
                  fileEntry.createWriter(
                    function (fileWriter) {
                      fileWriter.onwriteend = function () {
                        console.log("图片保存成功！");
                      };
                      fileWriter.onerror = function (e) {
                        console.log("保存图片时发生错误：" + e.toString());
                      };
                      fileWriter.write(blob);
                    },
                    function (e) {
                      console.log("创建文件写入器失败：" + e.toString());
                    }
                  );
                },
                function (e) {
                  console.log("获取文件失败：" + e.toString());
                }
              );
            },
            function (e) {
              console.log("获取子目录失败：" + e.toString());
            }
          );
        },
        function (e) {
          console.log("获取根目录失败：" + e.toString());
        }
      );
    },
    generateUniqueFileName() {
      var timestamp = new Date().getTime();
      var randomString = Math.random().toString(36).substring(2, 8);
      var fileName = "image_" + timestamp + "_" + randomString + ".png";
      return fileName;
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

  .recodes_border {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // overflow: scroll;
    height: 10rem;

    .recordsets {
      width: 6.54rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      // margin-bottom: .2rem;
      // height: 4rem;
      height: 10rem;
      // margin-top: 6.5rem;

      .record {
        width: 6.54rem;
        height: 0.96rem;
        border-color: #ffffff;
        margin-bottom: 0.3rem;
        display: flex;
        cursor: pointer;
        margin-top: 0.5rem;

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
          margin-left: 1rem;
        }
      }
    }
  }

  .save {
    cursor: pointer;
    position: fixed;
    bottom: 10%;

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
