<template>
  <div class="divFooter">
    <div>
      <Logo />Halo I'm footer, nice to meat you!
    </div>
    <!-- TODO: By law we need to tell users that we're stalking them, either by showing the badge on the side, or has this line of text somewhere in the site, just throw here first in case later forgot -->
    <div>
      <small>This site is protected by reCAPTCHA and the Google
        <a href="https://policies.google.com/privacy">Privacy Policy</a> and
        <a href="https://policies.google.com/terms">Terms of Service</a> apply.
      </small>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Footer extends Vue {}
</script>
