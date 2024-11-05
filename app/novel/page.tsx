import React from 'react'
import type { Metadata } from "next";
import Breadcrumb from '@/components/breadcrumb';

export const metadata: Metadata = {
    title: "Novel",
  };

const NovelPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
        <div className="max-w-screen-md mx-auto py-10">
        <Breadcrumb pageName="Novel" />
        </div>
    </div>
  )
}

export default NovelPage