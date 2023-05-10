<template>
  <div class="videoOverlay">
  </div>
  <video :id="vidId" class="backgroundVideo" preload="none" playsinline autoplay loop muted>
    <source :src="url" type="video/mp4">
  </video>
</template>
<script>
let uuid = 0;
let vidId;
export default {
  props: ['url'],
  methods: {
    setHeightToParentHeight(elem) {
      let parentStartingHeight = document.getElementById(elem).parentElement.offsetHeight;
      let parentStartingWidth = document.getElementById(elem).parentElement.offsetWidth;
      document.getElementById("backgroundVideo-" + uuid).style.height = "" + parentStartingHeight * 1.25 + "px";
      document.getElementById("backgroundVideo-" + uuid).style.width = "" + parentStartingWidth + "px";
      window.onresize = () => {
        let parentHeight = document.getElementById(elem).parentElement.offsetHeight;
        let parentWidth = document.getElementById(elem).parentElement.offsetWidth;
        document.getElementById("backgroundVideo-" + uuid).style.height = "" + parentHeight * 1.25 + "px";
        document.getElementById("backgroundVideo-" + uuid).style.width = "" + parentWidth + "px";
      };
    }
  },
  data() {
    this.uuid = uuid.toString();
    uuid += 1;
    this.vidId = "backgroundVideo-" + uuid;
  },
  updated() {
    this.setHeightToParentHeight("backgroundVideo-" + uuid);
  }
};
</script>
<style lang="stylus" scoped>
@import '../styles/main'
  .backgroundVideo
    transition transform 2s cubic-bezier(0.08, 0.82, 0.17, 1)
  .videoOverlay
    position absolute
    top 0
    left 0
    background linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), linear-gradient(270deg, rgba(255, 255, 255, 0) 50.03%, rgba(255, 255, 255, 0.7) 100%), linear-gradient(270deg, rgba(255, 255, 255, 0) 50.03%, rgba(255, 255, 255, 0.7) 100%);
    opacity .8
    z-index 1
    width 100%
    height 100%
  video
    position fixed
    z-index -1
    top 0
    object-fit cover
    width 100%
    height 100%
    display none
  .video-active
    video
      display block
@media screen and (max-height 900px)
  .backgroundVideo
    height 200%
</style>
