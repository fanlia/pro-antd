
import { useState, useEffect } from 'react'

export const useInitialValues = (initializer) => {
  const [status, setStatus] = useState('loading')
  const [ initialValues, setInitialValues ] = useState({})

  useEffect(() => {
    initializer()
    .then(data => {
      setInitialValues(data)
      setStatus('loaded')
    })
    .catch(e => {
      setStatus('error')
      throw e
    })
  }, [])

  return {
    status,
    initialValues,
  }
}
