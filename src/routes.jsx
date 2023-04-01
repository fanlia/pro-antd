
import Layout from './Layout'
import Lazy from './Lazy'
import NotFound from './404'

const layout = {
  layout: 'mix',
  route: {
    routes: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'About',
        path: '/about',
      },
      {
        name: 'Test',
        path: '/test',
      },
      {
        name: 'Baidu',
        path: 'http://www.baidu.com',
      },
    ],
  },
}

export default [
  {
    path: "/login",
    element: <Lazy component='pages/Login' />,
  },
  {
    path: "/",
    element: <Layout layout={layout} />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Lazy component='pages/Home' />,
      },
      {
        path: '/about',
        element: <Lazy component='pages/About' />,
      },
      {
        path: '/test',
        element: <Lazy component='pages/Test' />,
      },
    ],
  },
]
