<template>
  <v-container align-content-center fluid fill-height>
    <v-layout row wrap align-center v-show="isLoaded">
      <v-flex xs12 md6 align-self-center class="display-4 text-xs-center about-item">
        <Hao v-on:onObjLoaded="onObjLoaded" v-bind:isAbout="true"/>
      </v-flex>
      <v-flex xs12 md6 align-self-center class="text-xs-center about-item about-item--1">
        <p>Hey Welcome!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis eos blanditiis provident pariatur architecto dignissimos reiciendis voluptatem enim itaque sit optio, ipsum aspernatur rem earum quis aliquid iusto soluta omnis sunt, voluptas quos officiis, eius nulla. Officiis aspernatur porro voluptas enim, amet odio sint doloremque facere dignissimos. Explicabo necessitatibus possimus nostrum aspernatur est quasi quod fugiat sapiente asperiores laudantium accusantium, dolorum, officiis odio laborum veniam nobis odit placeat adipisci expedita in debitis! At sit vel tempore asperiores eius. Incidunt officiis animi nulla repellendus velit laudantium magni quaerat atque dolores impedit in exercitationem, fugit placeat, quasi accusantium, quia amet praesentium?</p>
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
    padding-right: 0 !important;
  }
}

.about-item--1 {
  display: flex;
  flex-direction: column;
  padding-right: 150px;
}

.about-sub-item {
  padding: 5px;
  border-radius: 10px;
}

.about-sub-item--1 {
  align-self: flex-start;
}

.about-sub-item--1:hover {
  background: #6b5152;
  color: #fff !important;
  transition: background-color 0.2s ease;
}

.about-sub-item--2 {
  align-self: center;
}

.about-sub-item--2:hover {
  background: #cac3bb;
  color: #fff !important;
  transition: background-color 0.2s ease;
}

.about-sub-item--3 {
  align-self: flex-end;
}

.about-sub-item--3:hover {
  background: #a6a6a8;
  color: #fff !important;
  transition: background-color 0.2s ease;
}
</style>
