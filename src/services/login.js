
import { useState, useEffect } from 'react'
import { Auth } from '../models/Auth'
import { signin, fetchUser } from './auth'

export const auth = new Auth({
  fetchUser,
  signin,
})

export const useAuth = () => {
  const [ status, setStatus ] = useState('checking')

  useEffect(() => {
    auth.checkin().then((user) => {
      setStatus(user ? 'checked' : 'unchecked')
    })
  }, [])

  return {
    status,
    auth,
  }
}
