<template>
  <h1>{{ title }}</h1>
  <h2>{{ author }}</h2>
</template>
<script lang="ts" setup>

const props = defineProps(["title", "author"])
</script>