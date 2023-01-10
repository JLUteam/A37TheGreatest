<template>
  <div class='FullLogo'>
    <img class="FullLogo" src="../assets/svg/FullLogo.svg" alt="">
  </div>
</template>
<script>
export default {
  name: "FullLogo",
};
</script>

<style lang="less" scoped>
.FullLogo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: .32rem;

  img {
    width: 2.46rem;
    height: .64rem;
  }
}
</style>