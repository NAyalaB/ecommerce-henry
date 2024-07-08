import DetalleProducto from "@/Components/DetalleProducto/DetalleProducto";
import React from "react";


const page = ({params} : {params: {productoID: string}}) => {
  const { productoID} = params;
    return (
      <div className="flex justify-center">
        <DetalleProducto id={productoID}  />

      </div>
    )
};

export default page;