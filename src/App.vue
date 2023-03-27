<template>
  <div class="base">
    <router-view></router-view>
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

ul {
  list-style: none;
}

body::-webkit-scrollbar {
  display: none;
}

.base {
  width: 100%;
  height: 100vh;
  overflow: scroll;
}

a {
  text-decoration: none;
}

* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}</style>
