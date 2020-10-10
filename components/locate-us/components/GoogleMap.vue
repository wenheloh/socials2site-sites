<template>
  <iframe
    frameborder="0"
    :width="width"
    :height="height"
    style="border:0"
    :src="getSrc()"
    allowfullscreen
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GoogleMap extends Vue {
  @Prop({ required: true })
  readonly address!: string;

  @Prop({ required: false, default: "100%" })
  readonly width!: string;

  @Prop({ required: false, default: "100%" })
  readonly height!: string;

  private getSrc = () => {
    return `https://www.google.com/maps/embed/v1/place?key=${process.env.NUXT_ENV_GOOGLE_MAP_API_KEY}
    &q=${this.address}`;
  };
}
</script>
