<template>
  <div>
    <FullScreenCarousel :items="items" />
    <ResponsiveGrid />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ layout: "default" })
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
