<template>
  <div>
    <FacebookPostsComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({ layout: "default" })
export default class SelectedContentsPage extends Vue {}
</script>
