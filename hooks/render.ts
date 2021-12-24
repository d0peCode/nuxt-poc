import redirectRootToPortal from './route-redirect-users'

export default nuxtConfig => {
    const router = Reflect.has(nuxtConfig, 'router') ? nuxtConfig.router : {}
    const base = Reflect.has(router, 'base') ? router.base : '/portal'

    return {
        /**
         * 'render:setupMiddleware'
         * {@link node_modules/nuxt/lib/core/renderer.js}
         */
        setupMiddleware(app) {
            app.use('/', redirectRootToPortal(base))
        }
    }
}
