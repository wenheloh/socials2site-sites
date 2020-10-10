<template>
  <iframe
    frameborder="0"
    class="iframeGoogleMap"
    :src="getSrc()"
    allowfullscreen
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class GoogleMapComponent extends Vue {
  @Prop({ required: true })
  readonly address!: string;

  private getSrc = () => {
    return `https://www.google.com/maps/embed/v1/place?key=${process.env.NUXT_ENV_GOOGLE_MAP_API_KEY}
    &q=${this.address}`;
  };
}
</script>
