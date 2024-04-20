<template>
  <nav class="flex justify-between">
    <a :href="preUrl">&lt; Previous chapter</a>
    <span>|</span>
    <a href="./toc">Table of content</a>
    <span>|</span>
    <a :href="nextUrl">Next chapter &gt; </a>
  </nav>
</template>

<script lang="ts" setup>
const props = defineProps({
  preUrl: String,
  nextUrl: String,
})
</script>