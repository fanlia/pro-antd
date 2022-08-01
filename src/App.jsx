
import { ProLayout } from '@ant-design/pro-components'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Result } from 'antd'
import logo from './assets/react.svg'

function App() {

    return (
        <div id='pro' style={{height: '100vh'}}>
        <ProLayout
            title='Demo'
            logo={logo}
            rightContentRender={() => {
                return <Avatar icon={<UserOutlined />} />
            }}
        >
            <Result status='404' title='404' />
        </ProLayout>
        </div>
    )
}

export default App
