<template>
  <v-app class="site-container">
    <TopBar />
    <nuxt />
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class LiteFullPage extends Vue {}
</script>

<style>
.site-container {
  position: relative;
  min-height: 100vh;
}
</style>
