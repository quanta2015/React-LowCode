import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  webpack5: {},
  fastRefresh: {},
  dynamicImport: {},
  "mfsu": {},
  // antd: false,
});
