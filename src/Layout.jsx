
import { ProLayout } from '@ant-design/pro-components'
import { Outlet, useLocation, useNavigate, Link, Navigate } from 'react-router-dom'

import {
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { Dropdown } from 'antd'

import Loading from './Loading'
import { useAuth } from './services/login'

export default function Layout (props) {

  const location = useLocation()
  const navigate = useNavigate()
  const auth = useAuth()

  if (auth.status === 'checking') return <Loading />
  if (auth.status === 'unchecked') {
    const from = encodeURIComponent(location.pathname + location.search)
    const to = `/login?redirect=${from}`
    return <Navigate to={to} />
  }

  const {
    layout = {},
  } = props

  const user = auth.auth.getUser()

  const handleAvatar = async ({ key }) => {
    if (key === 'logout') {
      await auth.auth.logout()
      navigate('/login')
    }
  }

  return (
    auth.status === 'checked' && <ProLayout
      location = { location }
      menuItemRender = {(item, dom) => (
        item.path.startsWith('http')
          ? <Link to={ item.path } target='_blank'>{dom}</Link>
          : <Link to={ item.path }>{dom}</Link>
      )}
      avatarProps = { user && {
        src: user.avatar,
        icon: !user.avatar && <UserOutlined />,
        title: user.username,
        size: 'small',
        render: (props, dom) => (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                },
              ],
              onClick: handleAvatar,
            }}
          >
            {dom}
          </Dropdown>
        ),
      }}
      { ...layout }
    >
      <Outlet />
    </ProLayout>
  )
}
