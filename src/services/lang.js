
import { useState, useEffect } from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import zhCN from 'antd/locale/zh_CN'
import enUS from 'antd/locale/en_US'

dayjs.locale('zh-cn')

const langMap = {
  'zh-cn': zhCN,
  'en': enUS,
}

export const loadLocale = (lang) => {
  dayjs.locale(lang)
  return langMap[lang]
}

export const switchLang = (lang) => {
  const current = lang === 'en' ? 'CN' : 'EN'
  const next = lang === 'en' ? 'zh-cn' : 'en'

  return {
    current,
    next,
  }
}

export const saveLang = (lang) => {
  localStorage.lang = lang
}

export const getLang = () => {
  const lang = localStorage.lang || 'zh-cn'
  return langMap[lang] ? lang : 'zh-cn'
}
