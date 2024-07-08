import { BotonVerProductos } from "@/Components/BotonVerProductos/BotonVerProductos";
import DivCarousel from "@/Components/Carousel/Carousel";

import { getProducts } from "@/helpers/product.helper";
import React from "react";



const Home = async () => {
  const products = await getProducts();
  return (
    <>
      {/* @ts-ignore */}
    <DivCarousel products={products}/>
    <div className="mt-8 ">

  <BotonVerProductos/>
    </div>
    </>
  )
}

export default Home;