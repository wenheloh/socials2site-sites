<template>
  <div :id="sectionId">
    <div class="divResponsiveGridHeader">
      <div class="divResponsiveGridHeaderTitle">
        <h3>
          {{ title }}
        </h3>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import StringUtils from "~/utils/StringUtils";

@Component
export default class ResponsiveGridHeader extends Vue {
  @Prop({ required: true })
  readonly title!: string;

  private sectionId: string = "";

  constructor() {
    super();
    const stringUtils = StringUtils.getInstance();
    this.sectionId = stringUtils.getKebabCase(this.title);
  }
}
</script>
