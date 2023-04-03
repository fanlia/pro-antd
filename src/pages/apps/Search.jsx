
import { PlusOutlined } from '@ant-design/icons'
import { PageContainer, ProCard, ProTable } from '@ant-design/pro-components'
import { Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

import * as api from './api'

import Delete from './Delete'

export default () => {

  const ref = useRef()
  const navigate = useNavigate()

  const handleCreate = async () => {
    navigate(`/apps/create`)
  }

  const handleUpdate = async (id) => {
    navigate(`/apps/update/${id}`)
  }

  const handleRead = async (id) => {
    navigate(`/apps/read/${id}`)
  }

  const handleDeleted = async () => {
    ref.current.reload()
  }

  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      valueType: 'indexBorder',
    },
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '操作',
      dataIndex: 'id',
      valueType: 'option',
      render: (text, row) => [
        <Button key='read' type='link' onClick={() => handleRead(row.id)}>详情</Button>,
        <Button key='update' type='link' onClick={() => handleUpdate(row.id)}>编辑</Button>,
        <Delete key='delete' rowId={row.id} onDeleted={handleDeleted}>删除</Delete>
      ],
    },
  ]

  const request = async (params, sort, filter) => {
    const msg = await api.search(params, sort, filter)
    return msg 
  }

  return (
    <PageContainer
      header={{
        title: 'Apps',
        breadcrumb: {
          items: [
            {
              title: 'Apps',
            }
          ],
        },
      }}
    >
    <ProCard>
      <ProTable
        actionRef={ref}
        columns={columns}
        request={request}
        rowKey='id'
        pagination={{
          pageSize: 5,
        }}
        toolBarRender={() => [
          <Button key='create' type='primary' onClick={handleCreate}><PlusOutlined />新建</Button>,
        ]}
      />
    </ProCard>
    </PageContainer>
  )
}
