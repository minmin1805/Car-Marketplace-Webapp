import FakeData from '@/Shared/FakeData'
import React from 'react'
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


function MostSearchCar() {

    console.log(FakeData.carList);
  return (
    <div class='mx-24'>
    <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Cards</h2>
    
    <Carousel>
  <CarouselContent>
    {FakeData.carList.map((car, index) => (
        <CarouselItem className='basis-1/4'><CarItem car={car}/></CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
    </div>
  )
}

export default MostSearchCar