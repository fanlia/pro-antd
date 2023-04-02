
import Layout from './Layout'
import Lazy from './Lazy'
import ErrorBoundary from './ErrorBoundary'
import Lang from './Lang'

import { loadLocale, getLang } from './services/lang'

export default async () => {

  const lang = getLang()

  const locale = loadLocale(lang)

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
    actionsRender: (props) => {
      return [
        <Lang lang={lang} />,
      ]
    }
  }

  const routes = [
    {
      path: "/login",
      element: <Lazy component='pages/Login' />,
    },
    {
      path: "/",
      element: <Layout layout={layout} />,
      errorElement: <ErrorBoundary />,
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

  return {
    locale,
    routes,
  }
}

