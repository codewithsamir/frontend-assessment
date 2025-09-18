// - Fetch and display a list of products from the API. - Implement data fetching using one of the following libraries: Axios combined with Zustand, or 
// React Query. - Display the products in a clean, user-friendly layout. - Implement pagination to load products in chunks. The API supports limit and offset query 
// parameters. - Implement a search functionality that filters the displayed products based on a user's input. The 
// API supports searching by title and category.


import {create} from 'zustand'
import { Prodcutdata } from '../types'
import axios from 'axios';

interface useProductstate {
    productdata:Prodcutdata[] | [];
    isLoading:boolean;
    iserror:string|null;

    fetchproduct :()=>void;


}
const api = "https://api.escuelajs.co/api/v1/products"





export const useProductdata = create<useProductstate>((set) => ({
    productdata:[
       
          {
    "id": 4,
    "title": "Handmade Fresh Table",
    "slug": "handmade-fresh-table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placehold.co/600x400",
      "slug": "others"
    },
    "images": [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ]
  },
          {
    "id": 5,
    "title": "Handmade Fresh Table",
    "slug": "handmade-fresh-table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placehold.co/600x400",
      "slug": "others"
    },
    "images": [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400"
    ]
  }
    
    ],
    isLoading:false,
    iserror:null,


    fetchproduct:async()=>{
        set({isLoading:true,iserror:null});

         try {
        const {data} = await axios.get(api)
        console.log("whole data",data)
        set({productdata:data,isLoading:false});

     

    } catch (error:any) {

    // console.log(error)
        set({iserror:error.message,isLoading:false});


        
    }
    }



}))