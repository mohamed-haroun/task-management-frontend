<script setup>

import {RouterLink} from "vue-router";
import {useAuthStore} from "@/stores/AuthStore.js";

const authStore = useAuthStore()
</script>

<template>
  <nav class="rounded bg-blue-50 dark:bg-gray-900 w-full z-20 border-b border-gray-200 dark:border-gray-600">
    <div class="mx-8 flex flex-wrap items-center justify-between px-4 py-2">
      <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task Manager</span>
      </RouterLink>
      <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <template v-if="!authStore.user">
          <div
              class="flex justify-between items-center gap-5 mx-5 my-4"
          >
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/register">Register</RouterLink>
          </div>
        </template>

        <template v-else>
          <RouterLink to="#" @click="authStore.handleLogout()">
            <img
                class="rounded-full w-8 md:my-2"
                :src="'https://ui-avatars.com/api/?background=OD8ABC&color=fff&name=' + authStore.user?.name" alt="">
            <!--          {{ user.name }}-->
          </RouterLink>
        </template>

        <button data-collapse-toggle="navbar-sticky" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/about">About Us</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact Us</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>
