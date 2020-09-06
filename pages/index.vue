<template>
  <div class="container">
    Halo Ni hao ma
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ layout: "lite-full-page" })
export default class HomePage extends Vue {}
</script>

<style>
.container {
  display: block;
  float: left;
  position: relative;
  width: 100%;
}
</style>
