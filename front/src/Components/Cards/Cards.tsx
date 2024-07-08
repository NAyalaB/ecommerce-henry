import React from "react";
import IProduct from "../../../interfaces/IProduct";
import Card from "../Card/Card";
import Link from "next/link";

interface ICardsProps {
  products: IProduct[];

}

export default function Cards(props: ICardsProps) {
  return (
    <>
       <h3 className="text-xl font-bold my-4">Productos Destacados</h3>
      <div className="flex flex-wrap  max-w-7xl min-h-400 h-fit shadow-sm  bg-white  m-1.5">
       
        {props.products &&
          props.products?.map((product, index) => (
            <React.Fragment key={product.id}>
            <Link href={`/Productos/${product.id}`} >
           
                  <Card {...product} />
              
                </Link >
                {index !== props.products.length - 1 && (
                <div className="w-full h-0.5 bg-gray-200 mt-2"></div>
              )}
            </React.Fragment>
          ))}
             </div> 


    </>
  );
}
