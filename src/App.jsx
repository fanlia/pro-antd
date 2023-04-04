
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import { ConfigProvider, App } from 'antd'
import { useInitialValues } from './services/initialValues'
import initializer from './initializer'
import Loading from './Loading'

export default () => {
  const { status, initialValues } = useInitialValues(initializer)

  if (status === 'loading') return <Loading />
  if (status === 'error') return <Loading />

  const { locale, routes } = initialValues

  const router = createBrowserRouter(routes)

  return (
    <ConfigProvider locale={locale}>
      <App>
      <RouterProvider router={router} />
      </App>
    </ConfigProvider>
  )
}
