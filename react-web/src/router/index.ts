import React, { lazy } from 'react';
import { BrowserRouterProps } from 'react-router-dom';
// import dashboard from './modules/dashboard';
// import list from './modules/list';
// import form from './modules/form';
// import detail from './modules/detail';
// import result from './modules/result';
import user from './modules/user';
import login from './modules/login';
import article from './modules/article';

export interface IRouter {
  path: string;
  redirect?: string;
  Component?: React.FC<BrowserRouterProps> | (() => any);
  /**
   * 当前路由是否全屏显示
   */
  isFullPage?: boolean;
  /**
   * meta未赋值 路由不显示到菜单中
   */
  meta?: {
    title?: string;
    Icon?: React.FC;
    /**
     * 侧边栏隐藏该路由
     */
    hidden?: boolean;
    /**
     * 单层路由
     */
    single?: boolean;
  };
  children?: IRouter[];
}

const routes: IRouter[] = [
  {
    path: '/login',
    Component: lazy(() => import('pages/Login')),
    isFullPage: true,
    meta: {
      hidden: true,
    },
  },
  {
    path: '/',
    redirect: '/article/list',
  },
];

const allRoutes = [...routes, ...article, ...login, ...user];

export default allRoutes;
