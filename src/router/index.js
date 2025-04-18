const routes = [
  {
    path: '/',
    redirect: '/users'
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/todos/:id',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/albums',
    name: 'Albums',
    component: Albums
  },
  {
    path: '/album/:id',
    name: 'AlbumDetails',
    component: AlbumDetails
  }
]
