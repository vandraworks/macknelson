<template>

  <Announcer />

  <div class="page">
    <main id="main" tabindex="-1">
      <router-view v-slot="{ Component }" :key="route.path">
        <transition name="fade">
          <component :is="Component"/>
        </transition>
      </router-view>

    </main>
  </div>

  <UpdateNotification />
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
import {onBeforeMount, onMounted, onUpdated} from "vue";
</script>

<style lang="stylus">
.searchZoom-enter-active,
.searchZoom-leave-active
  transition all .5s ease-in-out

.searchZoom-enter-from,
.searchZoom-leave-to
  transform scale(.9)
</style>
