import { defineConfig } from 'vite';

export default defineConfig({
  base: '/your-base-path/',  // Change to your desired base path
  build: {
    outDir: 'dist',  // Set the output directory for builds
    // Additional build options can be specified here
  },
  // Add other Vite options as necessary
});