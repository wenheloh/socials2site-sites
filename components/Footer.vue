<template>
  <v-footer>
    <v-container class="container pa-7">
      <v-row>
        <div class="col-xs-12 col-sm-4">
          <Logo class="logo" />
        </div>
        <div class="col-xs-12 col-sm-4">
          <ul class="flex-column mt-2 pl-0">
            <li
              v-for="(menu, index) of menus"
              :key="index"
              class="mb-3"
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
        </div>
        <div class="col-xs-12 col-sm-4 flex-column">
          <div class="mb-2">
            <v-btn v-for="icon in icons" :key="icon" icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </div>
          <small>
            Copyright &copy; 2020 Social2Site. All rights reserved.
          </small>
        </div>
      </v-row>
      <v-row class="justify-center pa-3">
        <small>This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and
          <a href="https://policies.google.com/terms">Terms of Service</a>
          apply.
        </small>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import StringUtils from "~/utils/StringUtils";
import { Menu } from "~/types/typings";

@Component
export default class Footer extends Vue {
  private stringUtils: StringUtils = StringUtils.getInstance();
  private icons = ["mdi-facebook", "mdi-instagram"];

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
