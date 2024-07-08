import React from "react";
import Image from "next/image";

import IProduct from "../../../interfaces/IProduct";

const Card: React.FC<IProduct> = ({
  name,
  description,
  stock,
  price,
  image,
  categoryId,
}) => {
  return (
    <>
       <div aria-label="contenedor-generalTarjetas" className="flex flex-row box-border p-4  ">
        <div aria-label="contendor-imagenProducto" className="flex-shrink-0 w-1/4 flex items-center justify-center">
          <Image
        
            src={image}
            alt="Imagen del producto"
            width={150}
            height={150}
            layout="responsive"
      sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div aria-label="contenedor-textoProducto" className="flex flex-col justify-center ml-4 w-3/4" >
          <h2 className="text-xl font-light">{name}</h2>
          <p className="mt-6 font-light">{description}</p>
          <span className="mt-6 text-2xl font-normal text-black">$ {price}</span>
        </div>
      </div> 


 
    </>
  );
};

export default Card;
