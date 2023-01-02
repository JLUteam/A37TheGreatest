<template>
  <transition
    appear
    name="animate__animated animate__bounce"
    enter-active-class="animate__backInUp"
  >
    <div class="social">
      <a id="google">
        <img src="../assets/svg/Google.png" alt="Icon" />
      </a>
      <a id="Facebook">
        <img src="../assets/svg/Facebook.png" alt="Icon" />
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

<style>
.social {
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 324px;
  height: 64px;
  margin: 1rem 1.5rem 1rem;
  background-color: #ffffff;
}

.social #google {
  width: 156px;
  height: 64px;
  border-radius: 24px;
  transition: 0.3s;
  cursor: pointer;
  border: 1.5px dashed #f4f4f6;
}

.social #google:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}

.social #Facebook {
  width: 156px;
  height: 64px;
  border-radius: 24px;
  transition: 0.3s;
  cursor: pointer;
  border: 1.5px dashed #f4f4f6;
}

.social #Facebook:hover {
  box-shadow: 0 10px 36px rgba(0, 0, 0, 0.15);
}
</style>