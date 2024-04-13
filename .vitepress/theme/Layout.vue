<template>
  <div class="layout bg-slate-400 min-h-screen p-5 md:p-10">
    <div class="container">
      <div
        class="paper max-w-screen-md min-h-screen bg-white mx-auto border border-slate-500 shadow-xl shadow-gray-500 py-10 px-8 md:py-20 md:px-16">
        <NotFound v-if="page.isNotFound" />
        <Home v-if="frontmatter.layout === 'home'" />
        <ToC v-if="frontmatter.layout === 'toc'" />
        <Page v-else />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useData } from 'vitepress'
import NotFound from './components/NotFound.vue';
import Home from './components/Home.vue';
import ToC from "./components/ToC.vue"
import Page from './components/Page.vue';

const { page, frontmatter } = useData()

</script>