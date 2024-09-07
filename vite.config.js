import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 配置别名 例如@src == ../src
      '@': resolve(__dirname, 'src'),
    },
    // 想要省略的后缀
    extensions: ['.js', '.json', '.ts'],
  },
  server: {
    open: true,
    port: 8086
  }
})
