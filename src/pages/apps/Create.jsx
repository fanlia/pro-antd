
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components'

import { useNavigate, Link } from 'react-router-dom'
import { Button, message } from 'antd'
import * as api from './api'

export default () => {

  const navigate = useNavigate()

  const handleBack = async () => {
    navigate('/apps')
  }

  const onFinish = async (data) => {
    const msg = await api.create(data)
    const row = msg.data
    message.success('保存成功!')
    navigate(`/apps/read/${row.id}`)
  }

  return (
    <PageContainer
      header={{
        title: 'Apps',
        breadcrumb: {
          items: [
            {
              title: <Link to='/apps'>Apps</Link>,
            },
            {
              title: '新增',
            }
          ],
        },
      }}
    >
    <ProCard>
      <ProForm
        onFinish={onFinish}
      >
        <ProFormText
          name='title'
          label='标题'
          rules={[
            {
              required: true,
              message: '请输入标题!',
            },
          ]}
        />
      </ProForm>
    </ProCard>
    </PageContainer>
  )
}
