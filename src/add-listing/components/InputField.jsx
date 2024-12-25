import { Input } from '@/components/ui/input'
import React from 'react'

function InputField({item, handleInputChange, carInfo}) {
  return (
    <div>
        <Input defaultValue={carInfo?.[item.name]} type={item?.fieldType} name={item?.name} required={item?.required} onChange={(e) => handleInputChange(e.target.name, e.target.value)}/>
    </div>
  )
}

export default InputField