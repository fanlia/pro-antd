
import Create from './Create'
import Read from './Read'
import Update from './Update'
import Search from './Search'

export default [
  {
    path: '/apps/create',
    element: <Create />,
  },
  {
    path: '/apps/read/:id',
    element: <Read />,
  },
  {
    path: '/apps/update/:id',
    element: <Update />,
  },
  {
    path: '/apps',
    element: <Search />,
  },
]
