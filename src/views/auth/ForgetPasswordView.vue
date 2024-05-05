<script setup>
import TextInput from "@/components/TextInput.vue";
import InputError from "@/components/InputError.vue";
import InputLabel from "@/components/InputLabel.vue";
import {ref} from "vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import SecondaryButton from "@/components/SecondaryButton.vue";

const form = ref({
  email: null
})

const authStore = useAuthStore()
</script>

<template>
  <div class="min-h-[90vh] flex items-center justify-center w-full">
    <div class="flex w-1/2 min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-slate-50 drop-shadow-xl rounded">
      <div class="sm:mx-auto sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="../../assets/logo.png"
             alt="Your Company"/>
        <h2 class=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Forget your password?
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-sm text-sm text-gray-500">
        <p>Enter your email to reset your password</p>
      </div>

      <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="authStore.handleForgetPassword(form)">
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
            <p
                v-if="authStore.status"
                class="text-green-500 text-sm">{{ authStore.status }}</p>
          </div>
          <div>
            <SecondaryButton type="submit" label="Reset Password"/>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>