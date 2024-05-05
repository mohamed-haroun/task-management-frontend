<script setup>
import {ref} from 'vue';
import GuestLayout from "@/layouts/GuestLayout.vue";
import TextInput from "@/components/TextInput.vue";
import InputLabel from "@/components/InputLabel.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import InputError from "@/components/InputError.vue";
import SecondaryButton from "@/components/SecondaryButton.vue";
import {useRoute} from "vue-router";

const route = useRoute()
const authStore = useAuthStore()

const form = ref({
  password: "",
  password_confirmation: "",
  email: route.query.email,
  token: route.params.token
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center w-full">
    <div class="flex w-1/2 min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 drop-shadow-xl rounded">
      <div class="sm:mx-auto sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="../../assets/logo.png"
             alt="Your Company"/>
        <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Reset your account password
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm text-sm text-gray-500">
        <p
            v-if="authStore.status"
            class="text-green-500 text-sm">{{ authStore.status }}</p>
      </div>

      <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="authStore.handleResetPassword(form)">
          <div>
            <InputLabel for="password" value="Password"/>
            <div class="mt-2">
              <TextInput
                  v-model="form.password"
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
              />
            </div>
            <InputError :message="authStore.errors['password']"/>
          </div>

          <div>
            <InputLabel for="password-confirmation" value="Confirm Password"/>
            <div class="mt-2">
              <TextInput
                  v-model="form.password_confirmation"
                  id="password-confirmation"
                  name="password-confirmation"
                  type="password"
                  autocomplete="current-password"
                  required
              />
            </div>
          </div>

          <div>
            <SecondaryButton type="submit" label="Reset Password"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
