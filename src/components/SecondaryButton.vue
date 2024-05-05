<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },

  label: {
    type: String,
    default: 'Primary button'
  }
})
</script>

<template>
  <button :type="type"
          class="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
    {{ label }}
  </button>
</template>