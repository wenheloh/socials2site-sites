<template>
  <div class="divResponsiveGridContainer">
    <ResponsiveGridItem v-for="post in posts" :id="post.id" :key="post.id" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { v4 as uuid } from "uuid";

@Component
export default class ResponsiveGrid extends Vue {
  // TODO: Get posts data via API?
  private posts = Array(6)
    .fill({ id: null })
    .map(_post => ({ id: uuid() }));
}
</script>
