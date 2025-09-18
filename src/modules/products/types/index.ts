export interface Category{
        id:number;
        name:string;
        image:string;
        slug:string;
    }

   export interface Prodcutdata{
id:number;
title:string;
slug:string;
price:number;
description:string;
category:Category;
images:any;
    }