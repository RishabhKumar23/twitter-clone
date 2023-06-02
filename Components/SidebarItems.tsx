import { IconType } from 'react-icons';
interface SidebarItemsProps {
    label: string;
    href: string;
    icon: IconType
    onClick?: () => void;

}

const SidebarItems: React.FC<SidebarItemsProps> = (
    {
        label,
        href,
        icon: Icon, //we add a alias Icon, now we can use Icon as component
        onClick
    }
) => {
    return (
        <div className='flex flex-row items-center'>
            <div className='relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer lg:hidden'>
                <Icon size={28} color='#1DA1F2'/>
            </div>
            <div className='relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-400 hover:bg-opacity-10 cursor-pointer'>
                <Icon size={24} color='blue'/>
                <p className='hidden lg:block text-xl'>
                    {label}
                </p>
            </div>
        </div>
    )
}

export default SidebarItems