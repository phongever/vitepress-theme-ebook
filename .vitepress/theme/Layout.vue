<template>
  <div class="layout bg-slate-400 min-h-screen p-5 md:p-10">
    <div class="container max-w-screen-md  mx-auto">
      <Navbar v-bind="preNextUrl" />
      <div
        class="paper min-h-screen bg-white border border-slate-500 shadow-xl shadow-gray-500 py-10 px-8 md:py-20 md:px-16 my-4">
        <NotFound v-if="page.isNotFound" />
        <Home v-if="frontmatter.layout === LAYOUT.HOME" v-bind="homeData" />
        <ToC v-if="frontmatter.layout === LAYOUT.TOC" />
        <Chapter v-else />
      </div>
      <Navbar v-bind="preNextUrl" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { VitePressData, useData } from 'vitepress'
import { computed, ComputedRef } from "vue"
import { data as homeData } from "./data/home.data"
import NotFound from './components/NotFound.vue';
import Home from './components/Home.vue';
import ToC from "./components/ToC.vue"
import Navbar from './components/Navbar.vue';
import Chapter from './components/Chapter.vue';
import { LAYOUT } from "./index.i"

const { page, frontmatter }: VitePressData = useData()

const preNextUrl: ComputedRef<{
  preUrl: string | null,
  nextUrl: string | null,
} | undefined> = computed(() => {
  const layout = frontmatter.value.layout

  if (layout === LAYOUT.HOME) return { preUrl: null, nextUrl: "/toc" }
})

</script>