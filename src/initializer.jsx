
import Layout from './Layout'
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
          name: 'CRUD',
          path: '/apps',
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
      element: 'pages/Login',
    },
    {
      path: "/",
      element: <Layout layout={layout} />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: '/',
          element: 'pages/Home',
        },
        {
          path: '/about',
          element: 'pages/About',
        },
        {
          path: '/test',
          element: 'pages/Test',
        },
        {
          path: '/apps/create',
          element: 'pages/apps/Create',
        },
        {
          path: '/apps/read/:id',
          element: 'pages/apps/Read',
        },
        {
          path: '/apps/update/:id',
          element: 'pages/apps/Update',
        },
        {
          path: '/apps',
          element: 'pages/apps/Search',
        },
      ],
    },
  ]

  return {
    locale,
    routes,
  }
}

