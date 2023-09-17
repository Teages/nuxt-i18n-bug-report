export default defineNuxtRouteMiddleware((to) => {
  // ignore verify
  return navigateTo({
    path: '/login',
    query: {
      origin: encodeURIComponent(to.path),
    },
  })
})
