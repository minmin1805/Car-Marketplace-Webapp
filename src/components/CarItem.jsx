import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { MdOpenInNew } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
import { Separator } from './ui/separator';

function CarItem({car}) {
  return (
    <Link to={'/listing-details/'+car?.id}>
    <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer'>
    <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
        <img src={car?.images[0]?.imageUrl} width={'100%'} height={250} className='rounded-t-xl h-[180px] object-cover'/>
        
        <div className='p-4 flex-grow flex flex-col'>
            <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
            <Separator />
            <div className='grid grid-cols-3 mt-5'>
                <div className='flex flex-col items-center'>
                <BsFuelPump className='text-lg mb-2 text-black' />
                <h2 className='text-center text-black'>{car?.mileage} Miles</h2>
                </div>
                <div className='flex flex-col items-center'>
                <BsSpeedometer2 className='text-lg mb-2 text-black' />
                <h2 className='text-black'>{car?.fuelType}</h2>
                </div>
                <div className='flex flex-col items-center'>
                <TbAutomaticGearbox className='text-lg mb-2 text-black' />
                <h2 className='text-black'>{car?.transmission}</h2>
                </div> 
            </div>
            <Separator className='my-2'/>
            <div className='flex items-center justify-between'>
              <h2 className='font-bold text-xl text-blue-500'>${car?.sellingPrice}</h2>
              <h2 className=' text-sm flex gap-2 items-center text-blue-500'>
              View Details 
              <MdOpenInNew /></h2>
            </div>
        </div>
        </div>
        </Link>
  )
}

export default CarItem