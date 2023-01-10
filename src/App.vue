<template>
  <div class="base">

    <router-view></router-view>
    <!-- <Forgot_Password></Forgot_Password> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
body::-webkit-scrollbar {
  display: none;
}
.base{
  width: 100%;
  height: 100vh;
  overflow: scroll;
}
a {
  text-decoration: none;
}
</style>
