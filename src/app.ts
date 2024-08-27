import { createApp as createClientApp, createSSRApp } from 'vue'

import { createHead } from '@unhead/vue'
import { InferSeoMetaPlugin } from '@unhead/addons'

import { createRouter } from '/@src/router'
import VulkApp from '/@src/VulkApp.vue'
import '/@src/styles'

const plugins = import.meta.glob<{ default: VulkPlugin }>('./plugins/*.ts')

export type VulkAppContext = Awaited<ReturnType<typeof createApp>>
export type VulkPlugin = (context: VulkAppContext) => void | Promise<void>

// this is a helper function to define plugins with autocompletion
export function definePlugin(plugin: VulkPlugin) {
  return plugin
}

export async function createApp(ssr = false) {
  const app = ssr ? createSSRApp(VulkApp) : createClientApp(VulkApp)
  const router = createRouter()

  const head = createHead({
    plugins: [InferSeoMetaPlugin()],
  })
  app.use(head)

  const context = {
    app,
    router,
    head,
    initialState: {} as Record<string, any>,
  }

  if (typeof window !== 'undefined') {
    context.initialState = window.__vulk__ ?? {}
  }

  app.provide('vulk', { plugins })

  for (const path in plugins) {
    if (!Object.hasOwn(plugins, path)) continue

    try {
      const { default: plugin } = await plugins[path]()
      await plugin(context)
    } catch (error) {
      console.error(`Error while loading plugin "${path}".`)
      console.error(error)
    }
  }

  // use router after plugin registration, so we can register navigation guards
  app.use(router)

  return context
}
