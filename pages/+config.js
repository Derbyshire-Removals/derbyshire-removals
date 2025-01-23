import { defineConfig } from 'vike/config'

export default defineConfig({
  // Enable static site generation
  prerender: true,
  // Use React as the UI framework
  extends: 'vike-react'
})