<template>
  <div class="site-container">
    <TopBar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LiteFullPage extends Vue {}
</script>

<style>
.site-container {
  position: relative;
  min-height: 100vh;
}
</style>
