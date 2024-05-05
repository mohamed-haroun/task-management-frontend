import {defineStore} from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),

    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: state => state.authStatus,
    },

    actions: {

        // Reset status and errors
        resetStatusAndErrors(){
            this.authErrors = [];
            this.authStatus = null;
        },

        // Getting the csrf token from the backend
        async getToken() {
            await axios.get("/sanctum/csrf-cookie")
        },

        // Getting the authorized user data after the login
        async getUser() {
            await this.getToken()

            const data = await axios.get("/api/user")

            this.authUser = data.data
        },

        // Login to the app
        async handleLogin(data) {

            this.resetStatusAndErrors()

            await this.getToken()

            await axios.post('login', {
                email: data.email,
                password: data.password
            }).then((resolve) => {
                this.router.push('/')
            }).catch((error) => {
                data.password = null
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                }
            })
        },

        // Creating a new account
        async handleRegister(data) {
            await this.getToken()

            this.resetStatusAndErrors()

            await axios.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            }).then((resolve) => {
                this.router.push('/')
            }).catch((error) => {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors
                }
            })
        },

        // Logout from the app
        async handleLogout() {
            this.resetStatusAndErrors()

            await axios.post('/logout')

            // setting the current authorized user to null
            this.authUser = null

            await this.router.push('/')
        },

        // Forgetting password handling
        async handleForgetPassword(data) {

            this.resetStatusAndErrors()

            await axios.post('/forgot-password', {
                email: data.email
            }).then((resolve) => {
                this.authStatus = resolve.data.status
            }).catch(error => {
                this.authErrors = error.response.data.errors
            })
        },

        // Resetting the password to a new one.
        async handleResetPassword(data) {

            this.resetStatusAndErrors()

            await axios.post('/reset-password', data)
                .then((resolve) => {
                    this.authStatus = resolve.data.status
                    setTimeout(() => {
                        this.router.push('/login')
                    }, 3000);
                }).catch(error => {
                    if (error.response.status === 422) {
                        this.authErrors = error.response.data.errors
                    }
                })
        }
    }
})