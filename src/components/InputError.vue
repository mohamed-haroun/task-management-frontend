<script setup>
defineProps({
  message: String,
});
</script>

<template>
  <div v-show="message" class="mt-1">
    <p class="text-sm text-red-600">
      {{ message ? message[0] : '' }}
    </p>
  </div>
</template>
