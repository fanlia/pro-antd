
import { ProCard, ProDescriptions } from '@ant-design/pro-components'
import { Button } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'

import * as api from './api'
import Delete from './Delete'

export default () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const handleBack = async () => {
    navigate('/apps')
  }

  const handleUpdate = async (id) => {
    navigate(`/apps/update/${id}`)
  }

  const handleDeleted = async () => {
    navigate('/apps')
  }

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '操作',
      dataIndex: 'id',
      valueType: 'option',
      render: (text, row) => [
        <Button key='update' type='link' onClick={() => handleUpdate(row.id)}>编辑</Button>,
        <Delete key='delete' rowId={row.id} onDeleted={handleDeleted}>删除</Delete>
      ],
    },
  ]

  const request = async () => {
    const msg = await api.read(id)
    return msg
  }

  return (
    <ProCard
      title='详情'
      extra={[
        <Button key="back" onClick={() => handleBack()}>
          返回  
        </Button>,
      ]}
      headerBordered
    >
      <ProDescriptions
        columns={columns}
        request={request}
      />
    </ProCard>
  )
}
