<template>
  <footer id="footer">
    <div id="footerLinks">
      <BodyCopy>Important Links</BodyCopy>
      <div>
        <a href="https://www.schellgames.com/lost-recipes-terms-of-use" target="_blank">Terms of Use</a>
        <a href="https://www.schellgames.com/lost-recipes-privacy-policy" target="_blank">Privacy Policy</a>
        <a href="https://www.schellgames.com/press/lost-recipes-press-kit" target="_blank">Press Kit</a>
        <a href="https://schellgames.atlassian.net/servicedesk/customer/portal/1/group/8" target="_blank">Support</a>
      </div>
      <a href="https://www.schellgames.com/" target="_blank">
        <img :src="site.footerLogo" alt="Schell Games Logo">
      </a>
    </div>
    <div id="footerNewsletter">
      <BodyCopy>Newsletter</BodyCopy>
      <!-- Begin Mailchimp Signup Form -->
      <div id="mc_embed_signup">
        <form action="https://schellgames.us6.list-manage.com/subscribe/post?u=c5e7c7276a5ff4882f708aecc&amp;id=8870df36c3" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group">
              <input placeholder="your@email.address" type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c5e7c7276a5ff4882f708aecc_8870df36c3" tabindex="-1" value=""></div>
            <button id="newsletterSubmit" @click="clickMCButton"><i class="far fa-arrow-right"></i></button>
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
          </div>
        </form>
      </div>
      <!--End mc_embed_signup-->
    </div>
    <div>
      <BodyCopy>Contact Us</BodyCopy>
      <SmallCopy>T: +1.412.390.0101<br>
        F: +1.412.927.0208<br>
        <a href="mailto:lostrecipes@schellgames.com">lostrecipes@schellgames.com</a></SmallCopy>

      <div id="footerSocial">
        <a href="https://twitter.com/schellgames" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/SchellGames" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>

    </div>

    <div>
      <button @click="scrollToTop" id="footerBackToTop">
        <i class="fal fa-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
import { useSite } from "~/composables";
import {useRoute} from "vue-router";

export default {
  setup() {
    const site = useSite();
    const route = useRoute();
    return {
      site, route
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    clickMCButton() {
      $('#mc-embedded-subscribe').click();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '../styles/main'

#footer
  background #F9F9F9
  display grid
  grid-template-columns 1fr 1fr 1fr 1fr
  column-gap subspacing
  color var(--primary-color)
  padding mediumSpacing smallSpacing
  position relative
  z-index 1
  #footerLinks
    > div
      display flex
      flex-wrap wrap
      font-size 1.125rem
      margin-bottom subspacing
      > a
        width 50%
  #footerNewsletter
    #mc_embed_signup
      position relative
    #mce-EMAIL
      border-bottom 1px solid var(--primary-color)
      padding-bottom 10px
      width 90%
      position relative
    #mc-embedded-subscribe
      display none
    #newsletterSubmit
      position absolute
      left calc(90% - 20px)
      top 0
      color var(--primary-color)
  #footerSocial
    display flex
    margin-top subspacing
    a
      margin-right 15px
      background sg-offwhite
      box-shadow dropshadow-light
      padding 8px
      width 18px
      border-radius 100%
      display flex
      justify-content center
      align-items center
      position relative
      &:after
        content ''
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        background var(--primary-color)
        border-radius 100%
        opacity 0
        transition all .3s
      &:hover
        svg
          color sg-offwhite
        &:after
          opacity 1
    svg
      color var(--primary-color)
      width 100%
      z-index 1
      transition all .3s
  #footerBackToTop
    color var(--primary-color)
    border-radius 50px
    position relative
    background var(--primary-color)
    height 140px
    width 72px
    &:hover
      svg
        transform translateY(-72%)
    svg
      font-size 4rem
      background sg-offwhite
      position absolute
      z-index 3
      border-radius 50px
      left 2px
      bottom 2px
      height 70px
      width 83%
      padding 5px
      transition all 1s cubic-bezier(0.08, 0.82, 0.17, 1)
  > div
    &:last-of-type
      display flex
      justify-content flex-end
.bodyCopy
  font-weight 600
  text-transform uppercase
  padding-bottom subspacing
.smallCopy
  line-height 1.25
a.Offline, a.Sandbox, a.Error, a.Photography
  display none
@media screen and (max-width 1500px)
  #footer
    grid-template-columns 1fr 1.3fr 1.5fr .25fr
    #footerLinks
      > div
        display flex
        > a
          width 100%
@media screen and (max-width 850px)
  #footer
    grid-template-columns 1fr 1fr
    > div
      padding subspacing 0
@media screen and (max-width 550px)
  #footer
    grid-template-columns 1fr
    > div
      &:last-of-type
        justify-content flex-start
@supports (-moz-appearance:none)
  footer #footerBackToTop svg
    height 66px
    width 66px
</style>
