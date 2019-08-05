<template>
  <v-container fill-height class="mt-2">
    <v-layout row wrap justify-center>
      <v-carousel height="550px">
        <v-carousel-item v-for="(project,i) in projects" :key="i" :src="project.src">
          <div class="project-card">
            <div class="project-title mb-4">
              <p class="headline project-name">{{project.name}}</p>
            </div>
            <div class="project-info">
              <v-btn color="secondary" v-if="project.url" target="_blank" :href="project.url">URL</v-btn>
              <v-btn color="secondary" v-if="project.code" target="_blank" :href="project.code">Code</v-btn>
              <v-btn color="secondary" v-if="project.demo" target="_blank" :href="project.demo">Demo</v-btn>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "Image Finder",
          src: "/Image-search.webp",
          // demo: "http://hao-search.tk/",
          code: "https://github.com/haoranzhang929/unsplash-image-finder"
        },
        {
          name: "Audio Visual Tool",
          src: "/audio-freq.webp",
          // demo: "http://ec2-52-213-180-139.eu-west-1.compute.amazonaws.com/",
          code:
            "https://github.com/haoranzhang929/audio-frequency-visual-generators"
        },
        {
          name: "ONE KICKS",
          src: "/shoes.webp",
          url: "https://1-kicks.com/"
        },
        {
          name: "Changing Places Ireland",
          src: "/cp.webp",
          url: "https://changingplaces.ie/"
        },
        {
          name: "Music Projects",
          src: "/bc.webp",
          url: "https://ha0beatz.bandcamp.com/"
        },
        {
          name: "Video Projects",
          src: "/youtube.webp",
          url:
            "https://www.youtube.com/channel/UCPIeJ9dP80qSbyOd2SGh4Jg/featured"
        }
      ]
    };
  }
};
</script>

<style  >
.v-responsive__content,
.project-title,
.project-info {
  display: flex;
  justify-content: center;
}
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.project-title {
  width: 300px;
  height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 3px;
}
.project-name {
  margin: 0;
  align-self: center;
}
</style>
