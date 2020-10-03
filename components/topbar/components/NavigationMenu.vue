<template>
  <ul class="ulNavMenus">
    <li
      v-for="(subMenu, index) of subMenus"
      :key="index"
    >
      <nuxt-link
        :class="{ ulNavMenusSelected: isActivePath(subMenu.route) }"
        :to="subMenu.route"
        :title="subMenu.name"
      >
        {{ subMenu.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
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
      route: "#selected-contents"
    },
    {
      name: "Contact Us",
      route: "#contact-us"
    }
  ];

  private isActivePath = (menuRoute: string): boolean => {
    return (this.$nuxt.$route.path === menuRoute && !this.$nuxt.$route.hash) || this.$nuxt.$route.hash === menuRoute;
  };
}
</script>

<style lang="scss"></style>
