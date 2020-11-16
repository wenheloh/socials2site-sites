<template>
  <iframe
    frameborder="0"
    class="iframeGoogleMap"
    :src="getSrc()"
    allowfullscreen
  ></iframe>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class GoogleMapComponent extends Vue {
  @Prop({ required: true })
  readonly address!: string;

  private getSrc = () => {
    return `https://www.google.com/maps/embed/v1/place?key=${this.$config.google.mapApiKey}
    &q=${this.address}`;
  };
}
</script>
