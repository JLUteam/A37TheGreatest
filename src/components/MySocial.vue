<template>
  <transition appear name="animate__animated animate__bounce" enter-active-class="animate__backInUp">
    <div class="social">
      <a id="google">
        <img class='icon' src="../assets/img/Google.png" alt="Icon" />
      </a>
      <a id="Facebook">
        <img class='icon' src="../assets/img/Facebook.png" alt="Icon" />
      </a>
    </div>
  </transition>
</template>
<script>
export default {
  name: "MySocial",
  data() {
    return {};
  },
};
</script>

<style  lang="less" scoped>
.social {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 6.48rem;
  height: 1.28rem;
  margin: .32rem .48rem .32rem;
  background-color: #ffffff;

  #google {
    width: 3.12rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #google:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }

  .icon {
    width: 3.12rem;
    height: 1.28rem;
  }

  #Facebook {
    width: 3.12rem;
    height: 1.28rem;
    border-radius: .48rem;
    transition: 0.3s;
    cursor: pointer;
    border: .03rem dashed #f4f4f6;
  }

  #Facebook:hover {
    box-shadow: 0 .2rem .72rem rgba(0, 0, 0, 0.15);
  }
}
</style>