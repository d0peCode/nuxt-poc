import { defineNuxtConfig } from 'nuxt3'
import hooks from './hooks'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    router: {
        base: '/users'
    },
    hooks: hooks(this)
})
