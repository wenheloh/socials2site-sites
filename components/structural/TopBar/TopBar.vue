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

<style lang="scss">
$topbar-height: 120px;

.divTopBarContainer {
  position: relative;
}

.divTopBarPlaceholder {
  height: $topbar-height;
  visibility: hidden;
}

.divTopBarOuter {
  position: fixed;
  top: 0px;
  width: 100%;
  height: $topbar-height;
  padding: 10px 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
}

.divTopBar {
  max-width: 1140px;
  margin: 0 auto;
}

.divTopBarInner {
  width: 100%;
}
</style>
