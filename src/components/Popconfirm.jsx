
import { useState } from 'react'
import { Button, message, Popconfirm } from 'antd'

export default ({ 
  title,
  description,
  onConfirm,
  children,
}) => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showPopconfirm = () => {
    setOpen(true)
  }

  const handleOk = async () => {
    setConfirmLoading(true)

    try {
      await onConfirm()
    } finally {
      setOpen(false)
      setConfirmLoading(false)
    }
  }

  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <Popconfirm
      title={title}
      description={description}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={handleCancel}
    >
      {children}
    </Popconfirm>
  )
}
