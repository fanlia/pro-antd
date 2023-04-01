
import { useNavigate } from 'react-router-dom'
import { switchLang, saveLang } from './services/lang'
import { Button } from 'antd'

export default ({ lang }) => {

  const navigate = useNavigate()

  const { current, next } = switchLang(lang)

  const handleLang = async (lang) => {
    saveLang(lang)
    navigate(0)
  }

  return (
    <Button type='text' onClick={() => handleLang(next)}>{current}</Button>
  )
}
