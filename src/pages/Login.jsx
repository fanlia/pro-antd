import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons'

import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  ProConfigProvider,
} from '@ant-design/pro-components'

import { App, Space, Tabs } from 'antd'
import { useState } from 'react'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import Loading from '../Loading'

const iconStyles = {
  marginInlineStart: '16px',
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '24px',
  verticalAlign: 'middle',
  cursor: 'pointer',
}

import { useAuth } from '../services/login'

export default () => {
  const [loginType, setLoginType] = useState('account')
  const location = useLocation()
  const navigate = useNavigate()
  const { message } = App.useApp()
  const auth = useAuth()

  if (auth.status === 'checking') return <Loading />
  if (auth.status === 'checked') return <Navigate to='/' />

  const handleLogin = async (data) => {
    const signData = { ...data, loginType }
    try {
      await auth.auth.login(signData)
      const to = new URLSearchParams(location.search).get('redirect') || '/'
      navigate(to)
    } catch (e) {
      message.warning('登录失败，请重新输入！')
    }
  }

  const items = [
    {
      key: 'account',
      label: '账号密码登录',
      children: loginType === 'account' && (
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder={'用户名: admin or user'}
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={'密码: 1234'}
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </>
      )
    },
    {
      key: 'phone',
      label: '手机号登录',
      children: loginType === 'phone' && (
        <>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined className={'prefixIcon'} />,
            }}
            name="mobile"
            placeholder={'手机号'}
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={'请输入验证码'}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`
              }
              return '获取验证码'
            }}
            name="captcha"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async () => {
              message.success('获取验证码成功！验证码为：1234')
            }}
          />
        </>
      )
    },
  ]
  return (
    auth.status === 'unchecked' && <ProConfigProvider hashed={false}>
      <div style={{ backgroundColor: 'white' }}>
        <LoginForm
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="Github"
          subTitle="全球最大的代码托管平台"
          actions={
            <Space>
              其他登录方式
              <AlipayCircleOutlined style={iconStyles} />
              <TaobaoCircleOutlined style={iconStyles} />
              <WeiboCircleOutlined style={iconStyles} />
            </Space>
          }
          initialValues={{
            autoLogin: true,
          }}
          onFinish={handleLogin}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey)}
            items={items}
          />
          <div
            style={{
              marginBlockEnd: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginForm>
      </div>
    </ProConfigProvider>
  )
}

