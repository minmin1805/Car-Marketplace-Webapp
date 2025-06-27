import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom';
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import ImageGallary from '../components/ImageGallary';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import OwnerDetail from '../components/OwnerDetail';
import Footer from '@/components/Footer';
import FinancialCalculator from '../components/FinancialCalculator';
import MostSearchCar from '@/components/MostSearchCar';

function ListingDetail() {

    const {id}=useParams();
    const [car, setCar]= useState({});

    useEffect(() => {
        GetCarDetail();
    },[])
    
    const GetCarDetail=async() => {
        const result=await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
        .where(eq(CarListing.id,id));

        const resp=Service.FormatResult(result);
        console.log(resp[0]);
        setCar(resp[0]);
    }

  return (
    <div>
        <Header />

        <div className='p-10 md:px-20'>
            {/* Header Details component */}
            <DetailHeader carDetail={car}/>

            <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5 '>
                {/*Left Side */}
                <div className='md:col-span-2 '>
                    {/*Image Gallery */}
                    <ImageGallary carDetail={car}/>
                    {/*Description */}
                    <Description carDetail={car}/>
                    {/*Features */}
                    <Features features={car?.features}/>
                    {/*Calculator */}
                    <FinancialCalculator carDetail={car}/>

                </div>
                {/*Right Side */}
                <div >
                    {/*price */}
                    <Pricing carDetail={car}/>

                    {/*car properties */}
                    <Specification carDetail={car}/>

                    {/*seller info */}
                    <OwnerDetail carDetail={car}/> 

                </div>
            </div>
        </div>

        <MostSearchCar />
        
        <div className='w-full mt-5'>
            <Footer />
            </div>

    </div>
  )
}

export default ListingDetail