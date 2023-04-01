
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import routes from './routes'

import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'

dayjs.locale('zh-cn')

const router = createBrowserRouter(routes)

export default () => {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}
