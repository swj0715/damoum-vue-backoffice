import { UserConfig } from 'vite'
import { baseConfig } from './base'
import { createVitePlugins } from './plugin'

export function createViteConfig(): UserConfig {
  return {
    ...baseConfig,
    plugins: createVitePlugins()
  }
}
