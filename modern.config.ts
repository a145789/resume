import appTools, { defineConfig } from '@modern-js/app-tools';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';
import ssgPlugin from '@modern-js/plugin-ssg';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  output: {
    ssg: true,
    disableSourceMap: true,
    distPath: {
      html: '',
    },
  },
  html: {
    disableHtmlFolder: true,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    tailwindCSSPlugin(),
    ssgPlugin(),
  ],
});
