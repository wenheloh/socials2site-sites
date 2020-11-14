<template>
  <div class="divBranchInfo">
    <h2>{{ branchInfo.name }}</h2>
    <span>
      <v-icon>home</v-icon>
      <pre>{{ getEncodedAddress() }}</pre>
    </span>
    <span><v-icon>phone</v-icon>{{ branchInfo.contactNumber }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";
import { BranchInfo } from "~/types/typings";

@Component
export default class BranchInfoComponent extends Vue {
  @Prop({ required: true })
  readonly branchInfo!: BranchInfo;

  private getEncodedAddress = () => {
    return this.branchInfo.address.replace(/<[^>]*>/g, "\r\n");
  };
}
</script>
