
import Layout from './Layout'
import Lazy from './Lazy'
import NotFound from './404'

import { redirect } from 'react-router-dom'
import { auth } from './services/auth'

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

const login = async ({ request }) => {
  const user = await auth.checkin()
  if (!user) {
    const url = new URL(request.url)
    const to = encodeURIComponent(url.pathname + url.search)
    return redirect('/login?redirect=' + to)
  }

  return null
}

const islogin = async () => {
  const user = await auth.checkin()
  if (user) {
    return redirect('/')
  }
  return null
}

export default [
  {
    path: "/login",
    element: <Lazy component='pages/Login' />,
    loader: islogin,
  },
  {
    path: "/",
    element: <Layout layout={layout} auth={auth}/>,
    errorElement: <NotFound />,
    loader: login,
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
