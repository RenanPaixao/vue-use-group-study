<template>
    <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
        <input type="checkbox" value="" id="default-toggle" class="sr-only peer" @click="switchColorMode" />
        <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
        </div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Color Mode</span>
    </label>
</template>

<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode({
  modes: {
    cafe: 'cafe'
  }
})

const switchColorMode = () => {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}

const switchToCafeMode = () => {
  colorMode.value = 'cafe'
}
</script>

<style>
.dark {
  background-color: #222;
  color: #fff;
}

.cafe {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}
</style>