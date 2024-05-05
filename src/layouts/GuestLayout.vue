<script setup>
import GuestNav from "@/components/GuestNav.vue";
</script>

<template>
  <header>
    <GuestNav/>
  </header>
  <main class="px-12">
    <slot />
  </main>

  <footer>

  </footer>
</template>
