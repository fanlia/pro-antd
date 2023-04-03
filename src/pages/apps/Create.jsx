
import {
  ProCard,
  ProForm,
  ProFormText,
} from '@ant-design/pro-components'

import { useNavigate } from 'react-router-dom'
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
    message.success('新增成功!')
    navigate(`/apps/read/${row.id}`)
  }

  return (
    <ProCard
      title='新增'
      extra={[
        <Button key="back" onClick={() => handleBack()}>
          返回  
        </Button>,
      ]}
      headerBordered
    >
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
  )
}
