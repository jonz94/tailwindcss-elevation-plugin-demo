<script setup lang="ts">
const props = defineProps({
  zValue: { type: Number, required: true },
})
</script>

<template>
  <div class="w-40 m-4 py-8 px-2 text-center" :class="'elevation-' + zValue">
    <p>.elevation-{{ zValue }}</p>
  </div>
</template>
