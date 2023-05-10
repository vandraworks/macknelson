<template>
  <div class="ms-buyOptions">
    <div class="ms-buyOptionsBackground" :style="{background: `linear-gradient(rgba(0, 0, 0, 0.25),rgba(0, 0, 0, 0.25)),url(${image})`}">
      {{ header }}
    </div>
    <a href="https://www.oculus.com/experiences/quest/1987283631365460" class="buyOptionsButton" target="_blank">Oculus Quest</a>
  </div>
</template>
<script>
export default {
  props: ['header', 'image']
};

</script>
<style lang="stylus">
@import '../styles/main'
.ms-buyOptions
  display flex
  flex-flow column
  background #222
  border-radius: 0 0 10px 10px
  margin 0 10px
  padding-bottom 10px
  width 300px
  a
    margin 5px 20px
.ms-buyOptionsBackground
  margin 0
  font-size 2rem
  font-weight 700
  color #fff
  margin-bottom 10px
  background-size cover !important
  background-position center !important
  padding subspacing
.buyOptionsButton
  color sg-offwhite
  background var(--primary-color)
  padding 10px
  flex-center()
  text-transform uppercase
  font-weight 600
</style>

