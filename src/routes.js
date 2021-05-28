import React from "react";

const users = React.lazy(() => import('./pages/users/Users'));

const routes = [
    {path: '/users', name: '사용자 정보 관리', component: users},
]

export default routes
