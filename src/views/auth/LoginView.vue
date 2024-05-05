<script setup>
import {ref} from 'vue';
import axios from "axios";
import GuestLayout from "@/layouts/GuestLayout.vue";
import TextInput from "@/components/TextInput.vue";
import InputLabel from "@/components/InputLabel.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import InputError from "@/components/InputError.vue";

const form = ref({
  email: null,
  password: null
})

const authStore = useAuthStore()

</script>

<template>
  <GuestLayout>
    <div class="min-h-[90vh] flex items-center justify-center w-full">
      <div class="flex w-1/2 min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 drop-shadow-xl rounded">
        <div class="sm:mx-auto sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src="../../assets/logo.png"
               alt="Your Company"/>
          <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login your account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form class="space-y-6" @submit.prevent="authStore.handleLogin(form)">
            <div>
              <InputLabel for="email" value="Email address"/>
              <div class="mt-2">
                <TextInput
                    v-model="form.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    autofocus
                />
              </div>

              <InputError :message="authStore.errors.email"/>

            </div>

            <div>
              <div class="flex items-center justify-between">
                <InputLabel for="password" value="Password"/>
                <div class="text-sm">
                  <RouterLink to="/forget-password" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot
                    password?
                  </RouterLink>
                </div>
              </div>
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
            </div>

            <div>
              <PrimaryButton type="submit" label="Login"/>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            {{ ' ' }}
            <RouterLink to="/register"
                        class="text-blue-600 underline hover:text-blue-800"
            >register now
            </RouterLink>
          </p>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
