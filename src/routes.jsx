
import Layout from './Layout'
import Lazy from './Lazy'
import NotFound from './404'

const layout = {
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
    path: "/",
    element: <Layout layout={layout} />,
    errorElement: <NotFound />,
    children: [
      {
        name: 'Home',
        path: '/',
        element: <Lazy component='pages/Home' />,
      },
      {
        name: 'About',
        path: '/about',
        element: <Lazy component='pages/About' />,
      },
      {
        name: 'Test',
        path: '/test',
        element: <Lazy component='pages/Test' />,
      },
    ],
  },
]
