import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Wood UI',
  favicon:
    'https://xiumubai.oss-cn-beijing.aliyuncs.com/blog/14_14.svg',
  logo: 'https://xiumubai.oss-cn-beijing.aliyuncs.com/blog/14_14.svg',
  outputPath: 'docs-dist',
  mode: 'site',
  description: '描述',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  devServer: {
    port: 3001,
  },
  // more config: https://d.umijs.org/config
});
