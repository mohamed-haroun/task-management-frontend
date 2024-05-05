<script setup>
import GuestLayout from "@/layouts/GuestLayout.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import {onMounted} from "vue";


const authStore = useAuthStore()

onMounted(async () => {
    await authStore.getUser()
})

</script>

<template>
<GuestLayout>
  <p>My name is Mohamed</p>

  <div class="m-12">
    <button class="bg-indigo-600 text-white px-3 py-1 rounded">
      Get User
    </button>
  </div>

  <div class="m-12">
    <h3 class="font-bold text-xl">Authorized user data:</h3>
    <div>
      <p>Name: {{ authStore.user?.name }}</p>
      <p>Email: {{ authStore.user?.email }}</p>
    </div>
  </div>
</GuestLayout>
</template>
