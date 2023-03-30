
import { Suspense, lazy } from 'react'
import { Spin } from 'antd'

export default ({ component, ...props }) => {
  const Component = lazy(() => import(`./${component}.jsx`))

  return (
    <Suspense fallback={<Spin />} >
      <Component { ...props } />
    </Suspense>
  )
}
