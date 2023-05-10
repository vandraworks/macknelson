<template>
  <nav>
    <a href="#preamble">Game Description</a>
    <a href="#locations">Locations</a>
    <a href="#features">Features</a>
    <a href="#media">Media Gallery</a>
    <a href="#recipes">Recipes</a>
    <a href="#featuredArticle">News</a>
  </nav>
</template>
<script>
import {useSite} from "~/composables";
import {useRoute} from "vue-router";

export default {
  setup() {
    const site = useSite();
    const route = useRoute();
    return {site, route};
  }
}
</script>
