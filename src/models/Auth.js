
const KEY = 'access_token'

const AccessToken = {
  set: access_token => access_token ? localStorage.setItem(KEY, access_token) : localStorage.removeItem(KEY),
  get: access_token => localStorage.getItem(KEY),
}

export class Auth {
  constructor(options = {}) {
    this.options = options
    this.user = null
    this.access_token = null
  }

  async me (access_token, autoLogin) {
    if (!access_token) return null
    try {
      this.user = await this.options.fetchUser(access_token)
      this.access_token = access_token
      if (autoLogin) AccessToken.set(access_token)
      return this.user
    } catch (e) {
      // ignore error
      return null
    }
  }

  getUser () {
    return this.user
  }

  async login (signData = {}) {
    const access_token = await this.options.signin(signData)
    return this.me(access_token, signData.autoLogin)
  }

  async logout () {
    AccessToken.set(null)
    this.access_token = null
    this.user = null
  }

  async checkin () {
    if (this.access_token && this.user) {
      return this.user
    }
    const access_token = AccessToken.get()
    return this.me(access_token)
  }
}
