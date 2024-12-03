<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
const mode = useColorMode();
</script>
<template>
  <div class="flex items-center justify-center h-svh w-full gap-2 bg-blue dark:bg-slate-950">
    <button @click="mode = 'light'" class="p-2 bg-amber text-sm ">默认</button>
    <button @click="mode = 'dark'" class="p-2 bg-blue text-sm ">深色</button>
  </div>
</template>