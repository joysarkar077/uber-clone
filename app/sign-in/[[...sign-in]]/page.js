import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
  <div className='flex justify-self-center'>
    <Image src="/banner.png" alt="banner" width={1600} height={1080}
    className="absolute object-center"/>
    <SignIn /></div>
  ) 
}