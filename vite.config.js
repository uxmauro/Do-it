
import { defineConfig } from "vite"

export default defineConfig ({

   base: '/Do-it/',

    css: {
        modules: true,
      },

    build: {
        outDir: '../dist'
    },
    server: {
        port: 8000, // Set the port number to 8000
      },
}
)