import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { Prodcutdata } from '../types'
import Link from 'next/link'

const Productcard = ({title,price,category,slug,images,description,id}:Prodcutdata) => {
  return (
<Link href={`/${title}_${id}`}>
 <Card className='w-[300px] rounded-2xl p-0'>
  
    <div className="w-full h-[150px]">
        <Image src={images[0] || "/default.png"} alt='' width={100} height={100} className='w-full h-full object-contain'/>
    </div>
  
<div className="p-2 space-y-3">
    <p className='px-4 py-2 text-sm bg-amber-500 text-white rounded-2xl inline-block'>{category.name}</p>
    <h2 className='font-semibold text-xl'>{title}</h2>
    <p className='text-lg'>Rs: {price}</p>
    <p>{description}</p>
</div>
</Card>
</Link>
  )
}

export default Productcard