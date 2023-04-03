
import Popconfirm from '../../components/Popconfirm'
import { Button, message } from 'antd'

import * as api from './api'

export default ({ rowId, onDeleted }) => {

  const onConfirm = async () => {
    await api.remove(rowId)
    message.success('删除成功!')
    await onDeleted()
  }

  return (
    <Popconfirm
      title='删除'
      description='确认删除吗?'
      onConfirm={onConfirm}
    >
      <Button type='link'>删除</Button>
    </Popconfirm>
  )
}
