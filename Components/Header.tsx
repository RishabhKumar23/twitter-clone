import React, { useCallback, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
interface HeaderPropes {
    label: string;
    showBackArrow?: boolean;
}


const Header: React.FC<HeaderPropes> = ({label, showBackArrow}) => {
    const router = useState();

    const handleBack = useCallback(() => {
        router.back();
    }, [router])
  return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
        <div className='flex flex-row items-center gap-2'>
            {
                showBackArrow && (
                    <BiArrowBack 
                    onClick={handleBack}
                    color='black'
                    size={20}
                    className='cursoe-pointer hover:opacity-70 transition'
                    />
                )
            }
            <h1 className='text-white text-xl font-semibold'>{label}</h1>
        </div>
    </div>
  )
}

export default Header