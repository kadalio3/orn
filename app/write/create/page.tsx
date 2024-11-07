import CreatNovelForm from '@/components/auth/create-novelform'
import Breadcrumb from '@/components/breadcrumb'
import React from 'react'

const WriteNovelPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
    <div className="max-w-screen-md mx-auto py-10">
      <Breadcrumb pageName="Tulis"/>
      <CreatNovelForm />
    </div>
    </div>
  )
}

export default WriteNovelPage