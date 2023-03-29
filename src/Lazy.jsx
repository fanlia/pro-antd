
import { Suspense, lazy } from 'react'
import { Spin } from 'antd'

export default ({ component }) => {
  const Component = lazy(() => import(`./${component}.jsx`))

  return (
    <Suspense fallback={<Spin />} >
      <Component default />
    </Suspense>
  )
}
