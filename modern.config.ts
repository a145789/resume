import appTools, { defineConfig } from '@modern-js/app-tools';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';
import ssgPlugin from '@modern-js/plugin-ssg';
import swcPlugin from '@modern-js/plugin-swc';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
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
    router: false,
  },
  plugins: [appTools(), tailwindCSSPlugin(), ssgPlugin(), swcPlugin()],
  tools: {
    webpack: (_, { addRules }) => {
      addRules({
        test: /\.pdf$/,
        use: ['file-loader'],
      });
    },
  },
});
