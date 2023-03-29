
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

  async me (access_token) {
    if (!access_token) return null
    this.user = await this.options.fetchUser(this.access_token)
    this.access_token = access_token
    AccessToken.set(access_token)
    return this.user
  }

  getUser () {
    return this.user
  }

  async login (signData) {
    const access_token = await this.options.signin(signData)
    return this.me(access_token)
  }

  async logout () {
    AccessToken.set(null)
    this.access_token = null
    this.user = null
  }

  async checkin () {
    const access_token = AccessToken.get()
    return this.me(access_token)
  }
}
