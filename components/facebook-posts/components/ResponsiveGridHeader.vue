<template>
  <div class="divResponsiveGridHeader">
    <div class="divResponsiveGridHeaderTitle">
      <h3>
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResponsiveGridHeader extends Vue {
  @Prop({ required: true })
  readonly title!: string;
}
</script>
