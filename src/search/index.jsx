import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarItem from '@/components/CarItem';

function SearchByOptions() {
    const [searchParam]=useSearchParams();
    const condition =searchParam.get('cars');
    const make =searchParam.get('make');
    const price =searchParam.get('price');
    const [carList, setCarList]=React.useState([]);

    console.log(condition, make, price);

    useEffect(() => {
        GetCarList();
    },[])

    const GetCarList=async() => {
        const result=await db.select().from(CarListing)
        .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId))
        .where(condition != undefined&&eq(CarListing.condition, condition))
        .where(make != undefined&&eq(CarListing.make, make))

        const resq=Service.FormatResult(result);
        console.log(resq);
        setCarList(resq);
    }

  return (
    <div>
    <div>
        <Header />

        <div className='p-16 bg-black flex justify-center'>
            <Search />
        </div>
        <div className='p-10 md:px-20'>
            <h2 className='font-bold text-4xl'>Search Results</h2>

            {/* List of carListing */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8'>
            {carList?.length>0? carList.map((item, index) => (
                <div>
                <CarItem car={item}/>
                </div>
            )):
            [1,2,3,4,5,6].map((item, index) => (
                <div className='h-[300px] rounded-xl bg-slate-200 animate-pulse'></div>
            ))
            }
            </div>
        </div>
    </div>
</div>
    )
}

export default SearchByOptions