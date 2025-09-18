"use server"
// https://api.escuelajs.co/api/v1/products
import axios from 'axios'
import { Prodcutdata } from '../types'
const api = "https://api.escuelajs.co/api/v1/products"


export const getProductbyid = async (id:number):Promise<Prodcutdata>=>{
    try {
        const {data} = await axios.get(`${api}/${id}`)
        // console.log(data)
        return data;

    } catch (error:any) {

    console.log(error.message)
    return null;
        
    }
}