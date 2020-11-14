<template>
  <ul
    class="ulNavMenus"
    :class="{
      ulSideNavMenus: isHamburgerMenu,
      hideMenu: isHamburgerMenu && isClosed,
    }"
  >
    <li
      v-for="(menu, index) of menus"
      :key="index"
      @click="$nuxt.$emit('navigated')"
    >
      <nuxt-link
        :class="{ ulNavMenusSelected: isActivePath(menu) }"
        :to="menu.route"
        :title="menu.name"
      >
        {{ menu.name }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import StringUtils from "~/utils/StringUtils";
import { Menu } from "~/types/typings";

@Component
export default class NavigationMenu extends Vue {
  @Prop({ required: false, default: false })
  readonly isHamburgerMenu!: boolean;

  @Prop({ required: false, default: true })
  readonly isClosed!: boolean;

  private stringUtils: StringUtils = StringUtils.getInstance();

  // TODO: Call api to get submenus?
  private menus: Menu[] = [
    {
      name: "Latest Contents",
      route: "/#latest-contents",
    },
    {
      name: "Locate Us",
      route: "/#locate-us",
    },
    {
      name: "Contact Us",
      route: "/#contact-us",
    },
  ];

  private isActivePath = (menu: Menu): boolean => {
    return (
      (this.$nuxt.$route.path === menu.route && !this.$nuxt.$route.hash) ||
      this.$nuxt.$route.hash === `#${this.stringUtils.getKebabCase(menu.name)}`
    );
  };
}
</script>

<style lang="scss"></style>
