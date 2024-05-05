<script setup>
import {ref} from 'vue';
import GuestLayout from "@/layouts/GuestLayout.vue";
import TextInput from "@/components/TextInput.vue";
import InputLabel from "@/components/InputLabel.vue";
import PrimaryButton from "@/components/PrimaryButton.vue";
import {useAuthStore} from "@/stores/AuthStore.js";
import InputError from "@/components/InputError.vue";

const form = ref({
  name: null,
  email: null,
  password: null,
  password_confirmation: null
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
            Create a new account
          </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form @submit.prevent="authStore.handleRegister(form)">
            <div>
              <InputLabel for="name" value="Name"/>
              <div>
                <TextInput
                    v-model="form.name"
                    id="name"
                    name="name"
                    type="text"
                    autocomplete="name"
                    autofocus
                />
              </div>
              <InputError :message="authStore.errors.name"/>
            </div>

            <div class="mt-3">
              <InputLabel for="email" value="Email address"/>
              <div>
                <TextInput
                    v-model="form.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                />
              </div>
              <InputError :message="authStore.errors.email"/>
            </div>

            <div class="mt-3">
              <InputLabel for="password" value="Password"/>
              <div>
                <TextInput
                    v-model="form.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                />
              </div>
              <InputError :message="authStore.errors.password"/>
            </div>

            <div class="mt-3">
              <InputLabel for="password-confirmation" value="Confirm Password"/>
              <div>
                <TextInput
                    v-model="form.password_confirmation"
                    id="password-confirmation"
                    name="password-confirmation"
                    type="password"
                    autocomplete="current-password"

                />
              </div>
              <InputError :message="authStore.errors['password']"/>
            </div>

            <div class="mt-3">
              <PrimaryButton type="submit" label="Register"/>
            </div>
          </form>

          <p class="mt-10 text-center text-sm text-gray-500">
            Already a member ?
            {{ ' ' }}
            <RouterLink to="/login"
                        class="text-blue-600 underline hover:text-blue-800"
            >Login
            </RouterLink>
          </p>
        </div>
      </div>
    </div>

  </GuestLayout>
</template>
