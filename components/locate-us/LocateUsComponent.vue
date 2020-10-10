<template>
  <div class="divLocateUs">
    <GoogleMap />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  contactNumber?: string;
}

@Component
export default class LocateUsComponent extends Vue {
  @Prop({ required: true })
  readonly branchInfo!: BranchInfo;
}
</script>
