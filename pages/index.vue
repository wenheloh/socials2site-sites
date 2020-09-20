<template>
  <v-carousel hide-delimiter-background cycle continuous :show-arrows="false">
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    />
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ layout: "lite-full-page" })
export default class HomePage extends Vue {
  private items = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
    }
  ];
}
</script>
