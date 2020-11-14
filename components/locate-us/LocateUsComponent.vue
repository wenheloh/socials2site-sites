<template>
  <div class="divLocateUs">
    <BranchInfoComponent :branchInfo="branchInfo" />
    <GoogleMapComponent :address="getCleanAddress()" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { BranchInfo } from "~/types/typings";

@Component
export default class LocateUsComponent extends Vue {
  @Prop({ required: true })
  readonly branchInfo!: BranchInfo;

  private getCleanAddress = () => {
    // Remove any html tag before pass in to Google Map Embeded API
    return this.branchInfo.address.replace(/<[^>]*>/g, "");
  };
}
</script>
