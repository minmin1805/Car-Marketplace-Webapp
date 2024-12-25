import { IoMdCheckmark } from "react-icons/io";

function Features({ features }) {
    const safeFeatures = features || {}; // Default to an empty object if undefined

    return (
        <div className='p-10 border rounded-xl my-7 shadow-md'>
            <h2 className='font-medium text-2xl'>Features</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-7'>
                {Object.entries(safeFeatures).map(([feature, value]) => (
                    <div className='flex gap-2 items-center'>
                        <IoMdCheckmark className='text-lg p-1 rounded-full bg-blue-100 text-primary'/>
                        <h2>{feature}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Features;
