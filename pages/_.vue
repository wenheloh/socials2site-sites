<template>
  <div style="height: 100%">
    Halo I'm dynamic 🙂
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  asyncData(_context: Context) {
    // TODO: Detect hostname aka domain/subdomain to show user's custom page
    // console.log(context.req.headers);
  },
})
export default class Dynamic extends Vue {}
</script>
