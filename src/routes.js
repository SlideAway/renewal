import React from "react";

const main = React.lazy(() => import('./pages/common/Main'));

const users = React.lazy(() => import('./pages/users/Users.js'));

const routes = [
    {path: '/users', name: '사용자 정보 관리', component: users},
    {path: '/main', name: '메인화면', component: main},
]

export default routes
