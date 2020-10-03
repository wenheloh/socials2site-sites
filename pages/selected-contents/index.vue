<template>
  <div id="selected-contents">
    <ResponsiveGrid />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({ layout: "default" })
export default class SelectedContentsPage extends Vue {}
</script>
