/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const usersRouter = {
  path: '/users',
  component: Layout,
  name: 'Users',
  meta: {
    title: 'Users',
    icon: 'user'
  },
  children: [
    {
      path: '',
      component: () => import('@/views/users/index'),
      name: 'ListUsers',
      meta: {
        title: 'List users',
        activeMenu: '/users'
      }
    },
    {
      path: 'create',
      name: 'CreateUser',
      component: () => import('@/views/users/create'),
      meta: {
        title: 'Create user',
        activeMenu: '/users/create'
      }
    }
  ]
}

export default usersRouter
