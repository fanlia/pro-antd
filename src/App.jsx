
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { ConfigProvider, App } from 'antd'
import { useInitialValues } from './services/initialValues'
import initializer from './initializer'
import Loading from './Loading'
import Lazy from './Lazy'

const makeItLazy = (routes = []) => routes.map(route => ({
  ...route,
  element: typeof route.element === 'string' ? <Lazy component={route.element} /> : route.element,
  children: Array.isArray(route.children) && makeItLazy(route.children),
}))

export default () => {
  const { status, initialValues } = useInitialValues(initializer)

  if (status === 'loading') return <Loading />
  if (status === 'error') return <Loading />

  let { locale, routes } = initialValues

  routes = makeItLazy(routes)

  const router = createBrowserRouter(routes)

  return (
    <ConfigProvider locale={locale}>
      <App>
      <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  )
}
