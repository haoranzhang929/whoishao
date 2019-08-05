<template>
  <v-container align-content-center fluid fill-height>
    <v-layout row wrap align-center v-show="isLoaded">
      <v-flex xs12 md6 align-self-center class="display-4 text-xs-center about-item">
        <Hao v-on:onObjLoaded="onObjLoaded" v-bind:isAbout="true"/>
      </v-flex>
      <v-flex xs12 md6 align-self-center class="about-item about-item--1">
        <h5 class="headline font-weight-light">Hey I am Hao, Nice to have you here!</h5>
        <h5 class="headline font-weight-light">I'm a Software Engineer based in Dublin, Ireland</h5>
        <h5
          class="headline font-weight-light"
        >Code‍💻, Design✍ and Music (I produce/DJ too!)🎵 are my passions</h5>
        <h5 class="headline font-weight-light">I can speak Chinese/English/Javascript 😉</h5>
        <h5
          class="headline font-weight-light"
        >Always interested in learning new technologies and trying out new things!</h5>
      </v-flex>
    </v-layout>
    <v-layout row wrap align-center v-if="!isLoaded">
      <v-flex md12 align-self-center class="text-xs-center">
        <v-progress-circular :size="70" :width="7" indeterminate color="secondary"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Hao from "@/components/Hao";

export default {
  data() {
    return {
      isLoaded: false
    };
  },
  components: {
    Hao
  },
  methods: {
    onObjLoaded: function(value) {
      this.isLoaded = value;
    }
  },
  created: function() {
    this.isLoaded = false;
  }
};
</script>

<style scoped>
@media (max-width: 960px) {
  .about-item {
    align-self: center;
  }

  .about-item--1 {
    padding: 0 20px !important;
  }

  .about-item--1 .headline {
    font-size: 18px !important;
  }
}

.about-item--1 {
  display: flex;
  flex-direction: column;
  padding: 0 150px 0 80px;
}

.about-item--1 .headline {
  margin: 10px 0;
}
</style>
