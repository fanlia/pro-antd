
import { redirect } from 'react-router-dom'

import { auth } from './auth'

const login = async ({ request }) => {
  const user = await auth.checkin()
  if (!user) {
    const url = new URL(request.url)
    const to = encodeURIComponent(url.pathname + url.search)
    return redirect('/login?redirect=' + to)
  }

  return null
}

const islogin = async () => {
  const user = await auth.checkin()
  if (user) {
    return redirect('/')
  }
  return null
}

export {
  auth,
  login,
  islogin,
}

