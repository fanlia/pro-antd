import { useState } from 'react'
import { Button, DatePicker } from 'antd'

export default () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <DatePicker />
    </div>
  )
}
