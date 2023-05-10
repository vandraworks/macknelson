<template>
    <h3 class="smallHeader">{{ standard }} <span class="sgGradient">{{ gradient }}</span> <b> {{ bold }}</b></h3>
</template>

<script>
export default {
  props: ['standard', 'gradient', 'bold']
};
</script>

