<script setup lang="ts">
const props = defineProps<{
  zValue: number
}>()
</script>

<template>
  <div class="w-40 m-4 py-8 px-2 text-center" :class="'elevation-' + props.zValue">
    <p>.elevation-{{ props.zValue }}</p>
  </div>
</template>
