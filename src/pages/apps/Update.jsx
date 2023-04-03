
import {
  ProCard,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components'

import { useParams, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'

import * as api from './api'

export default () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const handleBack = async () => {
    navigate('/apps')
  }

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
    <ProCard
      title='更新'
      extra={[
        <Button key="back" onClick={() => handleBack()}>
          返回  
        </Button>,
      ]}
      headerBordered
    >
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
  )
}
