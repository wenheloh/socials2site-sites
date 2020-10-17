<template>
  <div class="divResponsiveGridContainer">
    <ResponsiveGridItem
      v-for="post in posts"
      :key="post.id"
      :postDetails="post"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { v4 as uuid } from "uuid";
import { DateTimeFormatter, LocalDateTime } from "@js-joda/core";
import { Locale } from "@js-joda/locale_en";
import { Builder } from "builder-pattern";
import { LoremIpsum } from "lorem-ipsum";
import { PostDetails } from "./components/ResponsiveGridItem.vue";

@Component
export default class ResponsiveGrid extends Vue {
  // TODO: Get posts data via API?
  private posts: PostDetails[] = [];

  private beforeMount() {
    this.posts = [
      this.buildPosts(),
      this.buildPosts(),
      this.buildPosts(),
      this.buildPosts(),
      this.buildPosts(),
      this.buildPosts(),
    ];
  }

  private buildPosts(): PostDetails {
    const ImgPlaceholder = require("random-image-placeholder");
    const imgGenerator = new ImgPlaceholder({
      width: 600,
    });
    const url = imgGenerator.generate();

    const formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd").withLocale(
      Locale.ENGLISH
    );

    return Builder<PostDetails>()
      .id(uuid())
      .thumbnail(url)
      .title(new LoremIpsum().generateWords())
      .content(new LoremIpsum().generateSentences())
      .dateTime(LocalDateTime.now().format(formatter))
      .numberOfComments(Math.ceil(Math.random() * 10))
      .build();
  }
}
</script>
