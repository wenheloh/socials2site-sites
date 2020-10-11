<template>
  <div class="divResponsiveGridItems">
    <img :src="postDetails.thumbnail">
    <div class="divPostContents">
      <h3>{{ postDetails.title }}</h3>
      {{ truncateContent() }}
    </div>
    <div class="divPostStats">
      {{ postDetails.dateTime }}, {{ postDetails.numberOfComments }} comments
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

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
    return content.length > wordLimit ? content.substr(0, wordLimit - 1) + "..." : content;
  }
}
</script>
