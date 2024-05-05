<script setup>
defineProps({
  for: String,
  value: String
})
</script>

<template>
  <label :for="for"
         class="block text-sm font-medium leading-6 text-gray-900"
  >
    {{ value }}
  </label>
</template>
