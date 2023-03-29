
import { ProLayout, PageContainer } from '@ant-design/pro-components'
import { Outlet, useLocation, Link } from 'react-router-dom'

export default function Layout (props) {

  const location = useLocation()

  const {
    layout = {},
    container = {},
  } = props

  return (
    <ProLayout
      location = { location }
      menuItemRender = {(item, dom) => (
        item.path.startsWith('http')
          ? <Link to={ item.path } target='_blank'>{dom}</Link>
          : <Link to={ item.path }>{dom}</Link>
      )}
      { ...layout }
    >
      <PageContainer { ...container }>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
