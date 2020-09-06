<template>
  <nav>
    <ul>
      <nuxt-link
        class="nuxt-link"
        v-for="(subMenu, index) of subMenus"
        v-bind:key="index"
        :to="subMenu.route"
      >
        <li>{{ subMenu.name }}</li>
      </nuxt-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";
import { Component, Vue } from "vue-property-decorator";

export default class NavigationDropdown extends Vue {
  private asyncData = async (context: Context) => {
    return {
      subMenus: [
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
      ]
    };
  };
}
</script>

<style lang="scss"></style>
