import { lazy } from 'react';
import { DashboardIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';

const article: IRouter[] = [
  {
    path: '/article',
    meta: {
      title: '首页',
      Icon: DashboardIcon,
    },
    children: [
      {
        path: 'list',
        Component: lazy(() => import('pages/article/list/index')),
        meta: { title: '文章列表' },
      },
      {
        path: 'edit',
        Component: lazy(() => import('pages/article/edit/index')),
        meta: { title: '文章编辑' },
      },
    ],
  },
];

export default article;
