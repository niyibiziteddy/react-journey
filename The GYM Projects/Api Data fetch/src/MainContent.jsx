import React,{ useEffect, useState } from "react";
import FetchData from "./FetchingData";
import Spiner from "./spiner";
export default function MainContent(){
    const [products,setProducts] = useState([])
    useEffect(()=>{
        (async() => {
        const data = await FetchData()
        console.log(data.slice(0.5))
        setProducts(data.slice(0,15))
    })()
    },[])
    const prodList = products.map(item => {
        return (
            <div key={item.id} className="prod-item">
                <p className="category">{item.category}</p>
                <div className="image"><img src={item.image} alt="" /></div>
                <h3 className="title">{item.title}</h3>
                <p className="price">$ {item.price}</p>
                <p className="rating">{item.rating.rate}</p>
            </div>
        )
    })
    return(
        <>
            <Spiner />
            {/* <main className=" container products">  
                {products}                
            </main> */}
        </>
    )
    
}   