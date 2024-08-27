import { useStorage } from '@vueuse/core'
import { skipHydrate } from 'pinia'

export type UserData = Record<string, any> | null

export const useUserSession = defineStore('userSession', () => {
  // token will be synced with local storage
  // @see https://vueuse.org/core/usestorage/
  const token = useStorage('token', '')

  const user = ref<Partial<UserData>>()

  const isLoggedIn = computed(
    () => token.value !== undefined && token.value !== '',
  )

  function setUser(value: Partial<UserData>) {
    user.value = value
  }

  function setToken(value: string) {
    token.value = value
  }

  async function logoutUser() {
    user.value = undefined
    token.value = undefined
  }

  return {
    user,
    token: skipHydrate(token),
    isLoggedIn,
    logoutUser,
    setUser,
    setToken,
  } as const
})

/**
 * Pinia supports Hot Module replacement so you can edit your stores and
 * interact with them directly in your app without reloading the page.
 *
 * @see https://pinia.esm.dev/cookbook/hot-module-replacement.html
 * @see https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserSession, import.meta.hot))
}
