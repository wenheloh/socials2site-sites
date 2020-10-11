<template>
  <ul
    class="ulNavMenus"
    :class="{ ulSideNavMenus: isSideMenu, hideMenu: isSideMenu && isClosed }"
  >
    <li
      v-for="(subMenu, index) of subMenus"
      :key="index"
      @click="$nuxt.$emit('navigated')"
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
import { Component, Prop, Vue } from "vue-property-decorator";

interface MenuAction {
  name: string;
  route: string;
}

@Component
export default class NavigationMenu extends Vue {
  @Prop({ required: false, default: false })
  readonly isSideMenu!: boolean;

  @Prop({ required: false, default: true })
  readonly isClosed!: boolean;

  // TODO: Call api to get submenus?
  private subMenus: MenuAction[] = [
    {
      name: "Latest Contents",
      route: "/",
    },
    {
      name: "Locate Us",
      route: "#locate-us",
    },
    {
      name: "Contact Us",
      route: "#contact-us",
    },
  ];

  private isActivePath = (menuRoute: string): boolean => {
    return (
      (this.$nuxt.$route.path === menuRoute && !this.$nuxt.$route.hash) ||
      this.$nuxt.$route.hash === menuRoute
    );
  };
}
</script>

<style lang="scss"></style>
