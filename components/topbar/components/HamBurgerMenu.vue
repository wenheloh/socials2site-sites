<template>
  <div>
    <div
      class="divHamBurgerMenu removeSelectionHighlight"
      :class="{ divHamBurgerMenuOpened: !isClosed }"
      @click="isClosed = !isClosed"
    >
      <div
        class="divLine removeSelectionHighlight animation-duration-slow divLineColor"
        :class="{ 'rotate-line-1': !isClosed }"
      ></div>
      <div
        class="divLine removeSelectionHighlight animation-duration-slow"
        :class="{ divLineColor: isClosed }"
      ></div>
      <div
        class="divLine removeSelectionHighlight animation-duration-slow divLineColor"
        :class="{ 'rotate-line-2': !isClosed }"
      ></div>
    </div>
    <div
      class="divSliderMenu animation-duration-slow"
      :class="{ hideMenu: isClosed }"
    >
      <NavigationMenu :isHamburgerMenu="true" :isClosed="isClosed" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class HamBurgerMenu extends Vue {
  private isClosed: boolean = true;

  private created() {
    this.$nuxt.$on("navigated", () => {
      this.isClosed = true;
    });
  }
}
</script>
