import FormLogin from '@/components/auth/form-login'
import React from 'react'

function Login() {
  return (
    <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <FormLogin />
    </div>
  )
}

export default Login