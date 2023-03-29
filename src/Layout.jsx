
import { ProLayout, PageContainer } from '@ant-design/pro-components'
import { Outlet, useLocation, useNavigate, Link } from 'react-router-dom'

import {
  LogoutOutlined,
} from '@ant-design/icons'

import { Dropdown } from 'antd'

export default function Layout (props) {

  const location = useLocation()
  const navigate = useNavigate()

  const {
    layout = {},
    container = {},
    auth,
  } = props

  const user = auth.getUser()

  const handleAvatar = async ({ key }) => {
    if (key === 'logout') {
      await auth.logout()
      navigate('/login')
    }
  }

  return (
    <ProLayout
      location = { location }
      menuItemRender = {(item, dom) => (
        item.path.startsWith('http')
          ? <Link to={ item.path } target='_blank'>{dom}</Link>
          : <Link to={ item.path }>{dom}</Link>
      )}
      avatarProps = { user && {
        src: user.avatar,
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
      <PageContainer { ...container }>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
