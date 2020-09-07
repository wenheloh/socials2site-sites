<template>
  <ul class="nav-menus">
    <nuxt-link
      v-for="(subMenu, index) of subMenus"
      :key="index"
      class="nuxt-link"
      :class="{ 'nav-menu-selected': currentPath === subMenu.route }"
      :to="subMenu.route"
      :title="subMenu.name"
    >
      <li>{{ subMenu.name }}</li>
    </nuxt-link>
  </ul>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "vue-property-decorator";

export default class NavigationDropdown extends Vue {
  // TODO: Call api to get submenus?
  private subMenus = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Contact Us",
      route: "/contact-us"
    }
  ];

  private currentPath = this.$nuxt.$route.path;
}
</script>

<style lang="scss"></style>
