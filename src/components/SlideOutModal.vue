<template>
  <div class="slideModal">
    <div class="slideModalPanel">
      <div class="slideModalHeaderBackground"><SmallHeader :standard="headerText"/><button @click="changeSlideOutStatus()" class="slideModalClose"><i class="far fa-times"></i></button></div>
      <slot/>
    </div>
    <div @click="changeSlideOutStatus()" class="slideModalClickOut"></div>
  </div>
</template>

<script>

export default {
  props: ['headerText'],
  methods: {
    changeSlideOutStatus() {
      this.$emit('changeSlideOutStatus')
    },
    overflowHidden() {
      document.getElementsByTagName('html')[0].style.overflow = "hidden";
    },
    overflowUnhidden() {
      document.getElementsByTagName('html')[0].style.overflowY = "scroll";
      document.getElementsByTagName('html')[0].style.overflowX = "hidden";
    }
  },
  mounted() {
    this.overflowHidden();
  },
  unmounted() {
    this.overflowUnhidden();
  }
};

</script>
<style lang="stylus">
@import '../styles/main'
.slideModal
  position fixed
  width 100vw
  height 100%
  z-index 10
  top 0
  right 0
  transform translateX(0)
.slideModalPanel
  position absolute
  background sg-offwhite
  width 40vw
  height 100%
  right 0
  z-index 11
  box-shadow dropshadow-left
  overflow-y scroll
.slideModalHeaderBackground
  background var(--primary-color)
  color sg-offwhite
  flex-center()
  height 50px
  margin-bottom 12.5px
  svg
    font-size 2rem
    color sg-offwhite
.slideModalClose
  position absolute
  right subspacing
.slideOutLeft-enter-active,
.slideOutLeft-leave-active
  transition all .75s cubic-bezier(0.08, 0.82, 0.17, 1)
.slideOutLeft-enter-from,
.slideOutLeft-leave-to
  transform translateX(100%)
.slideModalClickOut
  position fixed
  width 60vw
  height 100%
  left 0
  top 0
  cursor pointer
  z-index 9
</style>
