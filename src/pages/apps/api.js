
const delay = (wait = 500) => new Promise(resolve => setTimeout(resolve, wait))

let db = new Array(30).fill(null).map((d, i) => ({
  id: `${i}`,
  title: `title ${i}`,
}))

export const create = async (data) => {
  await delay()

  const row = {
    ...data,
    id: `${db.length}`,
  }

  db.push(row)

  const msg = {
    data: row,
    success: true,
  }

  return msg
}

export const remove = async (id) => {
  await delay()

  const row = db.find(d => d.id === id)
  db = db.filter(d => d.id !== id)

  const msg = {
    data: row,
    success: true,
  }

  return msg
}

export const read = async (id) => {
  await delay()

  const row = db.find(d => d.id === id)

  const msg = {
    data: row,
    success: true,
  }

  return msg
}

export const search = async ({
  current = 1,
  pageSize = 20,
  ...query
}, sort, filter) => {
  await delay()

  const { title } = query

  let list = db

  if (title) {
    const re = new RegExp(title)
    list = db.filter(d => re.test(d.title))
  }

  const skip = (current - 1) * pageSize
  const data = list.slice(skip, skip + pageSize)
  const total = list.length
  const page = current

  const msg = {
    data,
    success: true,

    total,
    page: current,
  }

  return msg
}

export const update = async (id, data) => {
  await delay()

  db = db.map(d => d.id === id ? {...d, ...data, id} : d)
  const row = db.find(d => d.id === id)

  const msg = {
    data: row,
    success: true,
  }

  return msg
}

