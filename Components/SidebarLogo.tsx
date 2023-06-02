import React from 'react'
import { useRouter } from "next/router"
import { BsTwitter } from 'react-icons/bs'
const SidebarLogo = () => {
    const router = useRouter()
  return (
    <div onClick={() => router.push('/')} //by clicking on logo it will redirect to home page
     className='rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-opacity-10 hover:bg-blue-500 cursor-pointer transition'>
        <BsTwitter size={28} color='#1DA1F2'/>
    </div>
  )
}

export default SidebarLogo