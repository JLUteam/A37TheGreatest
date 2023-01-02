<template>
  <div class="basic">
    <Mylogo />
    <MyFrom/>
    <MySocial/>
    <MySignIn/>
    </div>

</template>

<script>
import Mylogo from './components/Mylogo.vue'
import MyFrom from './components/MyFrom.vue'
import MySocial from './components/MySocial.vue';
import MySignIn from './components/MySignIn.vue';
export default {
  name: 'App',
  components: {
    Mylogo,
    MyFrom,
    MySocial,
    MySignIn
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.basic {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-shadow: 0 10px 25px rgba(92, 99, 105, .2);
}
</style>
