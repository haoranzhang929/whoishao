<template>
  <v-container fill-height text-xs-center>
    <v-layout row wrap>
      <v-flex xs12 class="display-2 flex-align">
        <div>Where to find Hao?</div>
      </v-flex>
      <v-flex xs3 class="flex-align shake">
        <a href="https://github.com/haoranzhang929" target="_black">
          <img class="icon-img" src="/icons8-github.webp" alt="github icon">
        </a>
      </v-flex>
      <v-flex xs3 class="flex-align shake">
        <a href="https://www.linkedin.com/in/haoran-zhang-ie" target="_black">
          <img class="icon-img" src="/icons8-linkedin.webp" alt="linkedin icon">
        </a>
      </v-flex>
      <v-flex xs3 class="flex-align shake">
        <a href="https://www.instagram.com/mikezhanghao" target="_black">
          <img class="icon-img" src="/icons8-instagram.webp" alt="instagram icon">
        </a>
      </v-flex>
      <v-flex xs3 class="flex-align">
        <a href="#" class="qr">
          <img class="icon-img" src="/icons8-weixin.webp" alt="linkedin icon">
          <img class="wechat-qr" src="/qrcode.webp" alt="wechat qrcode">
        </a>
      </v-flex>
      <v-flex xs12 class="display-1 flex-align">
        <div>or</div>
      </v-flex>
      <v-flex xs12 class="display-1 flex-align">
        <div>Send me an email</div>
      </v-flex>
      <v-flex xs12 class="flex-align email shake">
        <v-btn href="mailto:haoranzhangie@gmail.com" fab dark large color="secondary">
          <v-icon dark>email</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
.qr:hover .wechat-qr {
  width: 300px;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.wechat-qr {
  display: none;
  z-index: 10;
}

.icon-img {
  width: 100px;
}

@media (max-width: 960px) {
  .icon-img {
    width: 64px;
  }
}

.flex-align {
  display: flex;
  justify-content: center;
}

.flex-align > div,
.flex-align > a {
  align-self: center;
}

.email {
  text-decoration: none;
}

.shake:hover {
  animation: shake 1.5s infinite;
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
</style>

