<template>
  <v-app>
    <Navbar/>
    <v-content>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
    <Footer/>
    <Particle/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Particle from "@/components/Particle";

export default {
  name: "App",
  components: { Navbar, Footer, Particle },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
html {
  overflow: hidden;
}

.v-content {
  z-index: 1;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

