
import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom'
import { Result, Button } from 'antd'

export default () => {
  const error = useRouteError()
  const navigate = useNavigate()
  if (isRouteErrorResponse(error)) {
    return (
      <Result
        status={error.status}
        title={error.statusText}
        subTitle={error.data && (error.data.message || error.data)}
        extra={<Button type='primary' onClick={() => navigate('/')}>Back Home</Button>}
      />
    )
  } else {
    return (
      <Result
        status='error'
        title='Oops!'
        subTitle={error.message || error}
      />
    ) 
  }
}
