import appTools, { defineConfig } from '@modern-js/app-tools';
import tailwindCSSPlugin from '@modern-js/plugin-tailwindcss';
import ssg from '@modern-js/plugin-ssg';
import swcPlugin from '@modern-js/plugin-swc';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig(({ env }) => {
  let source;
  if (env !== 'development') {
    source = {
      entries: {
        index: './src/App.tsx',
      },
      disableDefaultEntries: true,
    };
  }

  return {
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
    plugins: [appTools(), tailwindCSSPlugin(), ssg(), swcPlugin()],
    tools: {
      webpack: (_, { addRules }) => {
        addRules({
          test: /\.pdf$/,
          type: 'asset/resource',
          generator: {
            filename: 'static/孟国栋-简历.pdf',
          },
        });
      },
      htmlPlugin: {
        filename: 'index.html',
      },
    },
    source,
  };
});
