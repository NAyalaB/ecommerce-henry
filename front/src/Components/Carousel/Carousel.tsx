
import React from "react";
import { Carousel } from "flowbite-react";


import Image from "next/image";
import IProduct from "../../../interfaces/IProduct";


interface IPropsImage {
    products: IProduct[];
  
  }
  

export function DivCarousel(props: IPropsImage)  {

  return (
    <div className="mt-8 w-full h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel slide={true}>
      {props.products &&
    props.products.map((product) => (
      <div key={product.id} className=" w-full h-full flex justify-around items-center bg-gradient-custom from-black via-gray-700 to-gray-300 ">
 <div  aria-label="Contenedor Imagen" className=" flex  mr-10 w-2/4 h-full relative">
        <Image className="rotate-6 flex items-center justify-center"
          src={product.image}
          alt="..."
          layout="fill"
           objectFit="contain"
           style={{ backgroundColor: 'transparent'}}
        />
         </div>
<div  aria-label="Contenedor Texto" className=" flex flex-col justify-center text-4xl mr-4">
  <h1 className="text-white">{product.name}</h1>
  <p className="text-white">$ {product.price}</p>
</div>
      </div>
     
     )) }
      </Carousel>
    </div>
  );
};

export default DivCarousel;
