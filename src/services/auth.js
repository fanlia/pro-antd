
import { Auth } from '../models/Auth'

const fetchUser = async (access_token) => {

  return {
    username: '七妮妮',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
  }
}

const signin = async (signData) => {
  return 'access_token sample'
}

export const auth = new Auth({
  fetchUser,
  signin,
})
