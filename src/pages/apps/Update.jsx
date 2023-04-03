
import {
  PageContainer,
  ProCard,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components'

import { useParams, useNavigate, Link } from 'react-router-dom'
import { Button, message } from 'antd'

import * as api from './api'

export default () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const onFinish = async (data) => {
    await api.update(id, data)
    message.success('保存成功!')
    navigate(`/apps/read/${id}`)
  }

  const request = async () => {
    const msg = await api.read(id)
    return msg.data
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
              title: '编辑',
            }
          ],
        },
      }}
    >
    <ProCard>
      <ProForm
        onFinish={onFinish}
        request={request}
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
