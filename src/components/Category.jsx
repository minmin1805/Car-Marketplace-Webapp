import Data from '@/Shared/Data'
import React from 'react'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='mt-20'>

        <h2 className='font-bold text-3xl text-center mb-6'>Browse by Type</h2>

        <div className='grid grid-col-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
            {Data.Category.map((category, index) => (
              <Link to={'search/'+category.name}>
                <div className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer'>
                    <img src={category.icon} width={35} height={35}/>
                    <h2 className='mt-2 text-center text-blue-500'>{category.name}</h2>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Category