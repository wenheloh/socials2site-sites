<template>
  <div class="divResponsiveGridItems">
    <div :style="generateBackgroundImage()">
&nbsp;
    </div>
    <div class="divPostContents">
      <h3>{{ postDetails.title }}</h3>
      {{ truncateContent() }}
    </div>
    <div class="divPostStats d-flex justify-space-between">
      <span>{{ postDetails.dateTime }}</span>
      <span>{{ postDetails.numberOfComments }} comments</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

export interface PostDetails {
  id: string;
  thumbnail: string;
  title: string;
  content: string;
  dateTime: string;
  numberOfComments: number;
}

@Component
export default class ResponsiveGridItem extends Vue {
  @Prop({ required: true })
  readonly postDetails!: PostDetails;

  private truncateContent() {
    const { content } = this.postDetails;
    const wordLimit = 100;
    return content.length > wordLimit
      ? content.substr(0, wordLimit - 1) + "..."
      : content;
  }

  private generateBackgroundImage() {
    return {
      height: "100%",
      "border-top-left-radius": "3px",
      "border-top-right-radius": "3px",
      "background-image": `url(${this.postDetails.thumbnail})`,
    };
  }
}
</script>
