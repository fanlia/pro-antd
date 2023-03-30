
import { redirect } from 'react-router-dom'
import { Auth } from '../models/Auth'
import { signin, fetchUser } from './auth'

export const auth = new Auth({
  fetchUser,
  signin,
})

export const login = async ({ request }) => {
  const user = await auth.checkin()
  if (!user) {
    const url = new URL(request.url)
    const to = encodeURIComponent(url.pathname + url.search)
    return redirect('/login?redirect=' + to)
  }

  return null
}

export const islogin = async () => {
  const user = await auth.checkin()
  if (user) {
    return redirect('/')
  }
  return null
}
