import { UserConfig } from 'vite'

export const baseConfig: UserConfig = {
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      },
      '^/public': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
}
