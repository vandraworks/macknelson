<template>
  <h1 class="bigHeader">{{ standard }} <span class="sgGradient">{{ gradient }}</span> <b> {{ bold }}</b></h1>
</template>

<script>

export default {
  props: ['standard', 'gradient', 'bold']
};

</script>

