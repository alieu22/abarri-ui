import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This assumes your images are directly accessible from the project root in production
      '/assets/': `${path.resolve(__dirname, 'src/assets')}/`
    }
  },
  base: '/', // Adjust if your project is not served from the domain root
});
