<template>
  <div class='FullLogo'>
    <img class="FullLogo" src="@/assets/img/suixinji.png" alt="">
    <p>随心记</p>
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
  margin-bottom: .32rem;
  margin-right: .2rem;

  img {
    width: .64rem;
    height: .64rem;
  }

  p {
    margin-bottom: .32rem;
    font-size: 0.48rem;
    font-weight: 700;
    line-height: 0.68rem;
  }
}
</style>