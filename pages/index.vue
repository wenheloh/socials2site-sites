<template>
  <div>
    <FullScreenCarouselComponent :items="carouselItems" />
    <ResponsiveGridHeader title="Latest Contents" />
    <FacebookPostsComponent />
    <ResponsiveGridHeader title="Locate Us" />
    <LocateUsComponent
      v-for="branch in branchInfo"
      :key="branch.id"
      :branchInfo="branch"
    />
    <ResponsiveGridHeader title="Contact Us" />
    <ContactUsComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { BranchInfo } from "~/typings/types";

@Component({ layout: "default" })
export default class HomePage extends Vue {
  private carouselItems = [
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
    },
    {
      src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
    },
  ];

  private branchInfo: BranchInfo[] = [
    {
      id: "1",
      name: "STS HQ Sdn Bhd",
      address:
        "99, Bukit Bintang St, Bukit Bintang,<br />55100 Kuala Lumpur, <br />Federal Territory of Kuala Lumpur, <br />Malaysia",
      contactNumber: "+60127101234",
    },
  ];
}
</script>
