<template>
  <div class="divTopBarContainer">
    <div class="divTopBarPlaceholder">
      &nbsp;
    </div>
    <div class="divTopBarOuter">
      <div class="divTopBar">
        <div class="divTopBarInner">
          <Logo height="90" />
          <NavigationDropdown />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TopBar extends Vue {}
</script>

<style lang="scss"></style>
