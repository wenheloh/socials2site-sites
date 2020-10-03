<template>
  <v-container>
    <div class="divResponsiveGridContainer">
      <ResponsiveGridItem />
      <ResponsiveGridItem />
      <ResponsiveGridItem />
      <ResponsiveGridItem />
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ResponsiveGrid extends Vue {
  // TODO: Get posts data via API?
}
</script>
