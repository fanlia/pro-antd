import { useState } from 'react'
import { Button, DatePicker, Space } from 'antd'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Space>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <DatePicker />
      </Space>
    </div>
  )
}
