
import Layout from './Layout'
import Lazy from './Lazy'

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
    children: [
      {
        name: 'Home',
        path: '/',
        element: <Lazy component='Home' />,
      },
      {
        name: 'About',
        path: '/about',
        element: <Lazy component='About' />,
      },
      {
        name: 'Test',
        path: '/test',
        element: <Lazy component='pages/Test' />,
      },
    ],
  },
]
