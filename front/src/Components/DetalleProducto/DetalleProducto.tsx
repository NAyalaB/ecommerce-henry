"use client"
import React, {useEffect, useState} from "react";
import IProduct from "../../../interfaces/IProduct";
import { getProductsByID } from "@/helpers/product.helper";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { BotonAgregar } from "../BotonAgregar/BotonAgregar";
import { Card } from "flowbite-react";
import ReactImageMagnify from 'react-image-magnify';


const DetalleProducto = ({id}: {id: string}) =>{
    const router = useRouter()
    const [product, setProduct] = useState<IProduct>();
    const {userData} = useAuth();

    const fechData = async () => {
        const DetalleProducto = await getProductsByID(id);
        setProduct(DetalleProducto)
    };

    useEffect(() => {
        fechData()
    }, [])


    const handleAddToCart = (elem: any) => {
      if(!userData?.token){
        alert("Debe iniciar sesión para efectuar una compra")
      } else{
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        const productExist = cart?.some((product: IProduct) => {
          if(product.id === Number(elem.target.id)) return true;
          return false;
        })

        if(productExist) {
          alert("Este producto ya existe en tu carrito")
          router.push("/dashboard/compras")
        } else{
          cart.push(product);
          localStorage.setItem("cart", JSON.stringify(cart));
        alert("Producto agregado")
        router.push("/dashboard/compras")
      }
    }
  }
    return(       

       
     
<Card className=" md:min-w-fit" renderImage={() => 
  product?.image? (
    <div className="flex justify-center  p-3">
        <ReactImageMagnify {...{
    smallImage: {
        alt: product.name,
        isFluidWidth: true,
        src: product.image
    },
    largeImage: {
        src: product.image,
        width: 500,
        height: 1000,
    },
    enlargedImageContainerStyle: { zIndex: 9 },
 
    enlargedImageContainerDimensions: { width: 400, height:400 },
    isHintEnabled: true,
    hintTextMouse:"Pase el cursor para hacer zoom",
 
  
}} />
      </div>
    ) : (
      <></> 
    )
  } horizontal 
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {product?.name}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {product?.description}
  </p>
  <span className="text-3xl font-bold text-gray-900 dark:text-white">
    ${product?.price}
  </span>
  <button id={product?.id.toString()} onClick={handleAddToCart}>
    <BotonAgregar />
  </button>
</Card>

    )
}

export default DetalleProducto;

 