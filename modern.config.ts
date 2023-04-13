import appTools, { defineConfig } from '@modern-js/app-tools';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';
import ssgPlugin from '@modern-js/plugin-ssg';
import swcPlugin from '@modern-js/plugin-swc';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  output: {
    ssg: true,
    disableSourceMap: true,
    assetPrefix: './',
    distPath: {
      html: '',
    },
    polyfill: 'off',
  },
  html: {
    title: 'resume',
    disableHtmlFolder: true,
  },
  runtime: {
    router: true,
  },
  plugins: [appTools(), tailwindCSSPlugin(), ssgPlugin(), swcPlugin()],
});
