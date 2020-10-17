<template>
  <v-carousel
    hide-delimiter-background
    cycle
    continuous
    :show-arrows="false"
    :hide-delimiters="!showDelimiter()"
  >
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
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component
export default class FullScreenCarouselComponent extends Vue {
  @Prop({ required: true })
  readonly items!: string[];

  private showDelimiter = (): boolean => {
    return this.items.length > 1;
  };
}
</script>
