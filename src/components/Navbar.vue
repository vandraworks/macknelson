<template>

  <svg xmlns="http://www.w3.org/2000/svg" class="svgSettings">
    <defs>
      <linearGradient id="sgGradientParent">
        <stop class="sgGradientStop1" offset="0%"></stop>
        <stop class="sgGradientStop2" offset="100%"></stop>
      </linearGradient>
    </defs>
  </svg>

  <transition name="mobileHeaderHide">
    <span v-if="mobileMenuStatus"></span>
    <header id="navbar" v-else>
      <router-link to="/" class="logo">
        <img :src="site.navbarLogo" :alt="site.metaDescription">
      </router-link>

      <NavOptions class="desktopMenuNav"/>

      <div>
        <StyledLink target="_blank" link="https://www.oculus.com/experiences/quest/4584847304916084/">Buy Now</StyledLink>
      </div>

      <button @click="mobileMenuStatus =! mobileMenuStatus" id="mobileMenuBtn">
        MENU
      </button>
    </header>

  </transition>

  <transition name="mobileMenuOpacity">
    <div id="mobileMenuBackground" v-if="mobileMenuStatus" @click="mobileMenuStatus = false"></div>
  </transition>

  <transition name="mobileMenuSlide">

    <div id="mobileMenu" v-if="mobileMenuStatus">

      <div>
        <router-link to="/" class="mobileMenuLogo">
          <img :src="site.mobileMenuLogo" :alt="site.title">
        </router-link>

        <div>
          <nav class="mobileMenuNav" @click="mobileMenuStatus = false">
            <a href="#preamble">Game Description</a>
            <a href="#locations">Locations</a>
            <a href="#features">Features</a>
            <a href="#media">Media Gallery</a>
            <a href="#recipes">Recipes</a>
            <a href="#featuredArticle">News</a>
          </nav>

          <div>
            <button @click="mobileMenuStatus = false">
              <i class="far fa-times"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </transition>

</template>

<script>
import {useRoute} from "vue-router";
import {useSite} from "~/composables";
import NavOptions from "~/components/NavOptions.vue";

export default {
  setup() {
    const site = useSite();
    const route = useRoute();
    return {site, route};
  },
  components: {
    NavOptions
  },
  data() {
    return {
      mobileMenuStatus: false,
    }
  }
};
</script>

<style lang="stylus">
@import '../styles/main'

#navbar
  display flex
  justify-content space-between
  align-items center
  height 70px
  box-shadow dropshadow-light
  font-weight 600
  position fixed
  width 100%
  top 0
  z-index 10
  background white
  transition .5s ease
  a
    padding 10px
    text-decoration none
    transition color .25s
    color black
    &:hover
      color var(--primary-color)
  .link-active
    color var(--primary-color)
    position relative
    &:after
      animation-duration .25s
      animation-name underlineSlide
      position absolute
      content ''
      width calc(100% - 20px)
      border-bottom 2px solid var(--primary-color)
      left 10px
      bottom -5px
  > a:first-of-type
    flex-basis 0
    flex-grow 1
    margin-left 50px
    &:after
      display none
  > div:last-of-type
    display flex
    flex-basis 0
    flex-grow 1
    justify-content flex-end
    margin-right 50px
  #mobileMenuBtn
    display none

#mobileMenu
  background sg-black
  width 95%
  max-width 375px
  position fixed
  right 0
  font-weight 600
  bottom 0
  box-shadow dropshadow-left
  z-index 10
  > div
    padding 25px
    > .mobileMenuLogo
      &:after
        content ''
        display block
        position relative
        background sg-offwhite
        width 25px
        height 1px
        margin-top 20px
    > div
      display flex
      justify-content space-between
      margin-top 50px
      > .mobileMenuNav
        > a
          color sg-offwhite
          display block
          margin-bottom 25px
          transition color .25s
        > .router-link-active
          color var(--primary-color)

      > div
        display flex
        flex-flow column
        align-self flex-end

  button
    width 40px
    height 50px
    border 1px solid sg-offwhite
    border-radius 50px
    font-size 1.5rem
    margin-bottom 25px
    position relative
    color ms-primary
    background sg-offwhite
    > svg
      margin auto
      position absolute
      top 0
      left 0
      bottom 0
      right 0

.sgGradient path
  fill url(#sgGradientParent)

#navbar[data-observer-interact="hero"]
  top -70px

#mobileMenu.mobileMenuSlide-enter-active,
#mobileMenu.mobileMenuSlide-leave-active
  transition all .5s ease-in-out
#mobileMenu.mobileMenuSlide-enter-from,
#mobileMenu.mobileMenuSlide-leave-to
  right -375px

#mobileMenuBackground
  position fixed
  width 100%
  height 100%
  z-index 9
  background #111
  opacity .8

#mobileMenuBackground.mobileMenuOpacity-enter-active,
#mobileMenuBackground.mobileMenuOpacity-leave-active
  transition all .5s ease-in-out
#mobileMenuBackground.mobileMenuOpacity-enter-from,
#mobileMenuBackground.mobileMenuOpacity-leave-to
  opacity 0

@media screen and (max-width 1200px)
  #navbar
      div
        &:last-of-type
          flex-grow inherit
          a
            padding-left 20px

@media screen and (max-width 1200px)
  #navbar
    position fixed
    bottom 0
    top inherit
    padding 0
    width 100%
    a
      &:first-of-type
        flex-grow inherit
        padding-left 50px
    nav
      display none
    div
      &:last-of-type
        display none
    #mobileMenuBtn
      display block
      padding 20px 50px
  #navbar.mobileHeaderHide-enter-active,
  #navbar.mobileHeaderHide-leave-active
    transition all .4s ease-in-out
  #navbar.mobileHeaderHide-enter-from,
  #navbar.mobileHeaderHide-leave-to
    transform translateY(60px)
@media screen and (max-width 430px)
  #navbar
    a
      &:first-of-type
        padding-left 20px
    #mobileMenuBtn
      padding 20px 25px
@keyframes underlineSlide
  from
    width 0
  to
    width calc(100% - 20px)
</style>
