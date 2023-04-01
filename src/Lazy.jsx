
import { Suspense, lazy } from 'react'
import Loading from './Loading'

export default ({ component, ...props }) => {
  const Component = lazy(() => import(`./${component}.jsx`))

  return (
    <Suspense fallback={<Loading />} >
      <Component { ...props } />
    </Suspense>
  )
}
