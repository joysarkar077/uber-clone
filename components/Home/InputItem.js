"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputItem({type}) {
    const [value, setValue] = useState(null);
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
        <Image src={type=='dest'?'/dest.png':'/source.png'} alt='location' width={20} height={20}/>
        <input type="text" placeholder={type=='dest'?'Dropoff Location':'Pickup Location'} className='bg-transparent w-full outline-none'/>


        {/* <GooglePlacesAutocomplete
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            selectProps={{
                value,
                onChange: setValue,
                placeholder: type == 'dest' ? 'Dropoff Location' : 'Pickup Location',
                className: 'bg-transparent w-full outline-none'
            }}
        /> */}
    </div>
  )
}

export default InputItem