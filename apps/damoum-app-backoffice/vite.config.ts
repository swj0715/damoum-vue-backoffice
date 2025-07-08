import { defineConfig, mergeConfig } from 'vite'
import { createViteConfig } from '../../packages/config/vite'
import { fileURLToPath } from 'node:url'
import vuetify from 'vite-plugin-vuetify'
import path from 'node:path'

const base = createViteConfig()

export default defineConfig(() =>
  mergeConfig(base, {
    plugins: [
      vuetify({
        styles: {
          configFile: '../../packages/core/assets/styles/scss/variables/_vuetify.scss'
        }
      })
    ],
    define: {
      'process.env': {}
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@config': path.resolve(__dirname, '../../packages/config'),
        '@core': path.resolve(__dirname, '../../packages/core'),
        '@utils': path.resolve(__dirname, '../../packages/utils'),
        apexcharts: fileURLToPath(new URL('node_modules/apexcharts-clevision', import.meta.url))
      }
    },

    build: {
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        treeshake: true,
        output: {
          manualChunks(id: string | string[]) {
            if (id.includes('node_modules')) {
              if (id.includes('vuetify')) {
                return 'vutify'
              } else if (id.includes('tiptap')) {
                return 'tiptap'
              }
              return 'vendor'
            }
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['vuetify'],
      entries: ['./src/**/*.vue']
    }
  })
)
