<template>
  <div class='FullLogo_'>
    <div class="FullLogo" alt="">
      <img src="@/assets/img/suixinji.png" alt="">
    </div>
    <p>随心记</p>
  </div>
</template>
<script>
export default {
  name: "FullLogo",
};
</script>

<style lang="less" scoped>
.FullLogo_ {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .FullLogo {
    // margin-bottom: .32rem;
    margin-left: 0rem;
    background-color: #bf2b7a;
    width: .74rem;
    height: .74rem;
    margin-right: .2rem;
    border-radius: .15rem;
    img {
      width: .74rem;
      height: .74rem;


    }
  }

  p {
    // position: absolute;
    font-size: 0.48rem;
    font-weight: 700;
    line-height: 0.68rem;
  }
}
</style>