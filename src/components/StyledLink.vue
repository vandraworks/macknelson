<template>
    <a :href="link" class="msButton"><span><slot/></span></a>
</template>

<script>
export default {
  props: ['link']
};

</script>

