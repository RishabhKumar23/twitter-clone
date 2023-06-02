import FollowBar from '../Components/FollowBar'
interface LayoutProps {
    children: React.ReactNode;
}
import React from 'react'
import Sidebar from '../Components/Sidebar'
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='h-screen bg-white'>
        <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
            <div className='grid grid-cols-4 h-full'>
                <Sidebar />
                <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
                    {children}
                </div>
                <FollowBar />
            </div>
        </div>
    </div>
  )
}

export default Layout;