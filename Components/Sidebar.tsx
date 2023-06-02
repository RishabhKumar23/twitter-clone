import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { AiOutlineUser}  from 'react-icons/ai'
import { AiOutlineLogout } from 'react-icons/ai'
import SidebarLogo from '../Components/SidebarLogo'
import SidebarItems from '../Components/SidebarItems'
import SidebarTweetButton from '../Components/SidebarTweetButton'
const Sidebar = () => {
    // storing icons in array of abjects
    const items = [
        {
            label: 'Home',
            href: '/',
            icon: BsHouseFill
        },
        {
            label: 'Notification',
            href: '/notification',
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: "",
            icon: AiOutlineUser
        }
    ];
    return (
        <div className='col-span-1 h-full pr-4 md:pr-6'>
            <div className='flex flex-col items-end'>
                <div className='space-y-2 lg:w-[230px]'>
                    {/* iterations of items array */}
                    <SidebarLogo />
                    {items.map((item)=>(
                        <SidebarItems 
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}/>
                    ))}
                    <SidebarItems onClick={() => {}} icon={AiOutlineLogout} label="LogOut" />
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    )
}

export default Sidebar