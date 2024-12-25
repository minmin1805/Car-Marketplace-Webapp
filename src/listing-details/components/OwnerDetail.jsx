import { Button } from '@/components/ui/button'
import React from 'react'

function OwnerDetail({carDetail}) {
  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
    <h2 className='font-medium text-2xl mb-3'>Owner/Seller</h2>
    <img className='w-[70px] h-[70px] rounded-full' src={carDetail?.userImageUrl} />
    <h2 className='font-bold text-xl mt-1'>{carDetail?.userName}</h2>
    <h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>
    <Button className='w-full mt-6 '>Message Owner for Details</Button>
    </div>
  )
}

export default OwnerDetail