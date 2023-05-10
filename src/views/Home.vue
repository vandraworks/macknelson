<template>
  <div id="pageLoaded">

    <div id="home">

      <section id="menu">
        <subheader>Menu</subheader>

        <div id="menuItems">
          <router-link to="">Work</router-link>
          <router-link to="">Non-Work</router-link>
        </div>

      </section>

      <section id="mackPhotos">
        <div id="primaryPhoto">
          <img :src="page.mackPrimaryPhoto" alt="">
        </div>
      </section>

      <section id="bio">
        <smallHeader bold="Mack Nelson" standard="I'm"></smallHeader>
        <div class="bodyCopy" v-html="page.bio"/>
      </section>
    </div>

  </div>
</template>

<script setup>
import {ref, onUpdated} from "vue";

import { usePage } from "~/composables";
const page = usePage();

import { useSite } from "~/composables";
const site = useSite();

onUpdated(() => {

})

</script>
<style lang="stylus">
@import '../styles/main'
#pageLoaded
  display flex
  justify-content center
  align-items center
#home
  display grid
  grid-template-columns 1fr 420px 1fr
  column-gap mediumSpacing
  height 100vh
  margin 0 mediumSpacing
#menu
  display flex
  justify-content center
  align-items flex-end
  flex-flow column
  margin-bottom 100%
  .subheader
    font-weight 200
    text-transform uppercase
    font-style italic
    margin-bottom smallSpacing
    display none
  #menuItems
    display none
    a
      display block
      font-size smallHeader
      text-align right
      text-transform uppercase
      font-weight 600
      margin-bottom subspacing
      padding-right subspacing
      &:first-of-type
        border-right 3px solid #FFA800
      &:last-of-type
        border-right 3px solid #CE8800
#mackPhotos
  position relative
  display flex
  justify-content center
  align-items center
  border-radius 2px
  overflow hidden
  img
    position relative
    object-fit cover
    width 100%
#bio
  display flex
  flex-flow column
  align-items flex-start
  justify-content center
  max-width 500px
  margin-top 100%
  .bodyCopy
    p
      margin-bottom subspacing
    a
      text-decoration underline
  .smallHeader
    padding-bottom subspacing
    font-weight 300
@media screen and (max-width 1550px)
  #home
    grid-template-columns 250px 420px 1fr
@media screen and (max-width 1300px)
  #home
    grid-template-columns 1fr
    grid-template-rows auto 1fr auto
    column-gap 0
    row-gap smallSpacing
    margin 0 smallSpacing
    height auto
  #bio
    margin-top 0
    margin-bottom smallSpacing
    max-width unset
  #menu
    margin-top smallSpacing
    margin-bottom 0
</style>
