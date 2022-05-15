<script setup lang="ts">
import Box from './components/Box.vue'
</script>

<template>
  <div class="container mx-auto min-h-screen grid place-content-center space-y-8 font-mono">
    <header class="flex justify-between px-8">
      <h1 class="font-bold text-lg">Tailwind CSS elevation plugin demo</h1>
      <p><a href="https://github.com/jonz94/tailwindcss-elevation-plugin-demo" class="underline">source code</a></p>
    </header>

    <main class="flex flex-wrap justify-between">
      <Box v-for="i in 25" :z-value="i - 1" />
    </main>
  </div>
</template>
