<template>
  <div id="micrositeBanner">
    <a href="https://www.schellgames.com/" target="_blank"> <img src="https://schellgames.nyc3.cdn.digitaloceanspaces.com/images/Microsites/sglogo.png" alt="SG Microsite Logo"> </a>
  </div>
  <div id="announcementBanner">
    <a class="bodyCopy" href="https://www.oculus.com/experiences/quest/4584847304916084/" target="_blank" v-text="site.announcementCopy"/>
  </div>
</template>
<script setup>
import { useSite } from "~/composables";
const site = useSite();
</script>
<style lang="stylus">
@import '../styles/main'
#micrositeBanner
  position relative
  top 0
  z-index 10
  background sg-black
  padding-left subspacing
  img
    margin-bottom -3px
#announcementBanner
  position relative
  z-index 10
  display flex
  justify-content center
  align-items center
  padding 15px 0
  font-weight 500
  text-align center
</style>
