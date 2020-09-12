<template>
  <ul class="ulNavMenus">
    <li
      v-for="(subMenu, index) of subMenus"
      :key="index"
      @click="setCurrentPath"
    >
      <nuxt-link
        :class="{ ulNavMenusSelected: currentPath === subMenu.route }"
        :to="subMenu.route"
        :title="subMenu.name"
        >{{ subMenu.name }}</nuxt-link
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "vue-property-decorator";

interface MenuAction {
  name: string;
  route: string;
}

@Component
export default class NavigationMenu extends Vue {
  // TODO: Call api to get submenus?
  private subMenus: MenuAction[] = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Selected Contents",
      route: "/selected-contents"
    },
    {
      name: "Contact Us",
      route: "/contact-us"
    }
  ];

  private currentPath: string = this.$nuxt.$route.path;

  private setCurrentPath() {
    this.currentPath = this.$nuxt.$route.path;
  }
}
</script>

<style lang="scss"></style>
