<template>
  <div class="divTopBarContainer" :class="{ 'topbar-hidden': hideTopBar }">
    <div class="divTopBarPlaceholder"></div>
    <div class="divTopBarOuter">
      <div class="divTopBar">
        <div class="divTopBarInner">
          <Logo />
          <NavigationMenu />
          <HamBurgerMenu />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class TopBar extends Vue {
  private hideTopBar: boolean = !this.$nuxt.$route.hash; // Hide top bar when user open link with hash so that topbar wont block the title
  private lastScrollPosition: number = 0;

  private beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  private beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private handleScroll() {
    const currentScrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    // On mobile can be less than 0 and we want to stop
    if (currentScrollPosition < 0) {
      return;
    }

    // Add some delay so that it wont hide immediately
    if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 30) {
      return;
    }

    this.hideTopBar = currentScrollPosition > this.lastScrollPosition;
    this.lastScrollPosition = currentScrollPosition;
  }
}
</script>
