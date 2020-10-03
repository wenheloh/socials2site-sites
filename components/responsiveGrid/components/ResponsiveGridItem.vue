<template>
  <div class="divResponsiveGridItems">
    {{ id }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResponsiveGridItem extends Vue {
  @Prop({ required: true, default: 0 })
  readonly id!: string;
}
</script>
