import { getProductbyid } from '@/modules/products/actions';
import Image from 'next/image';
import React from 'react'

const page = async({params}:{params:{id:string}}) => {
    const {id} = await params;
    const productid = id.split("_")[1]
const data = await getProductbyid(Number(productid))
console.log(data)


  return (
    <div className="p-12">
        <div className="product-image mb-6">
            {data.images.map((i:string)=>(
                <Image key={i} src={i} alt={i} width={200} height={200} className="" />

            ))}
        </div>
        <div className="product-desc space-y-3">
            <h2 >{data.category.name}</h2>

            <h1 className='text-3xl font-bold'>{data.title}</h1>
            <h2 >{data.description}</h2>
            <h2 className='font-semibold'>price {data.price}</h2>
        </div>

    </div>
  )
}

export default page