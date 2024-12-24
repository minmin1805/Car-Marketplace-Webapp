import Header from '@/components/Header'
import React from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import TextAreaField from './components/TextAreaField'
import { SelectSeparator } from '@/components/ui/select'
import { Checkbox } from '@radix-ui/react-checkbox'
import { features } from './../Shared/features.json'

function AddListing() {
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className ='p-10 border rounded-xl mt-10'>
                {/* Car Dettails */}
                <div>
                    <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {carDetails.carDetails.map((item, index) => (
                            <div key={index}>
                                <label className='text-sm'>{item?.label} {item.required&&<span className='text-red-600'>*</span>}</label>
                            {item.fieldType=='text' || item.fieldType=='number'? <InputField item={item}/>
                            :item.fieldType=='dropdown'? <DropdownField item={item}/> 
                            :item.fieldType=='textarea'? <TextAreaField item={item}/> : null
                            }
                            </div>
                        ))}
                    </div>
                </div>
                <SelectSeparator className='my-6'/>
                {/* Feature List */}
                <div>
                    <h2 className='font-medium text-xl my-6'>Features</h2>
                    <div>
                    {features.features.map((item,index) => (
                        <div key={index}></div>
                    ))}
                    </div>
                </div>
                {/*Car Images */}
            </form>
        </div>
    </div>
  )
}

export default AddListing