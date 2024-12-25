import Service from '@/Shared/Service';
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function OwnerDetail({carDetail}) {

  const {user}=useUser();

  const navigation = useNavigate();

  const OnMessageOwnerButtonClick=async() => {
  const userId=user.primaryEmailAddress.emailAddress.split('@')[0];
  const ownerUserId=carDetail?.createdBy.split('@')[0];



    try {
      await Service.CreateSendBirdUser(userId, user?.fullName, user?.imageUrl)
      .then(resp=> {
        console.log(resp);
      })

    }catch(e) {
      console.log(e);
    }

    try{
      await Service.CreateSendBirdUser(ownerUserId, carDetail?.userName, carDetail?.userImageUrl)
      .then(resp=> {
        console.log(resp);
      })

    }catch(e) {
      console.log(e);
    }

    try{
      await Service.CreateSendBirdChannel([userId, ownerUserId], carDetail?.listingTitle)
      .then(resp=> {
        console.log(resp);
        console.log("Channedl created");
        navigation('/profile');
      })

    }catch(e) {
      console.log(e);
    }

  }
  return (
    <div className='p-10 border rounded-xl shadow-md mt-7'>
    <h2 className='font-medium text-2xl mb-3'>Owner/Seller</h2>
    <img className='w-[70px] h-[70px] rounded-full' src={carDetail?.userImageUrl} />
    <h2 className='font-bold text-xl mt-1'>{carDetail?.userName}</h2>
    <h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>
    <Button onClick={OnMessageOwnerButtonClick} className='w-full mt-6 '>Message Owner for Details</Button>
    </div>
  )
}

export default OwnerDetail