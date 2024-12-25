import React from 'react'
import { Textarea } from "@/components/ui/textarea"


function TextAreaField({item, handleInputChange, carInfo}) {
  return (
    <div>
      <Textarea defaultValue={carInfo?.[item.name]} onChange={(e) => handleInputChange(item.name, e.target.value)} required={item.required}/>
    </div>
  ) 
}

export default TextAreaField