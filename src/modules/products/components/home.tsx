"use client"
import React, { useEffect } from 'react'
import Productcard from './Productcard'
import { Prodcutdata } from '../types'
import { useProductdata } from '../hooks/useProductdata'

const Home = () => {
    
   

    const{fetchproduct,isLoading,iserror,productdata} = useProductdata()

    useEffect(()=>{
        fetchproduct()
    },[])

  return (
    <>
    
    <div className="  p-12">
        <h1 className='text-3xl text-center py-8 font-bold'>Our Products</h1>
<div className="p-10 w-full flex flex-wrap justify-center gap-12">
            
    {productdata && productdata.length> 0 && productdata.map((data)=>(
        <Productcard {...data} key={data.id}/>
    ))}
</div>
    </div>
    </>
  )
}

export default Home