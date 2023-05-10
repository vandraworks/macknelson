<template>
    <h2 class="mediumHeader">{{ standard }} <span class="sgGradient">{{ gradient }}</span> <b>{{ bold }}</b></h2>
</template>

<script>
export default {
  props: ['standard', 'gradient', 'bold']
};
</script>

