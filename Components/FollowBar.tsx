import React from 'react'

const FollowBar = () => {
  return (
    <div className='px-6 py-4 hidden lg:block'>
        <div className='bg-neutral-800 rounded-xl px-2 py-3'>
            <h2 className='text-white text-xl font-semibold px-10'>
                Who to Follow
            </h2>
            <div className='flex flex-col gap-6 mt-4'>
                {/* fetching user list */}
            </div>
        </div>
    </div>
  )
}

export default FollowBar