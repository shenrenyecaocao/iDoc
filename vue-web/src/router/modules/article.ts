import Layout from '@/layouts';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/article',
    component: Layout,
    redirect: '/article/list',
    name: 'article',
    meta: { title: '首页', icon: DashboardIcon },
    children: [
      {
        path: 'list',
        component: () => import('@/pages/article/list/index.vue'),
        name: 'article-list',
        meta: { title: '文章列表', icon: DashboardIcon },
      },
      {
        path: 'edit/:id?',
        component: () => import('@/pages/article/edit/index.vue'),
        name: 'article-edit',
        meta: { title: '文章编辑', icon: DashboardIcon },
      },
    ],
  },
];
