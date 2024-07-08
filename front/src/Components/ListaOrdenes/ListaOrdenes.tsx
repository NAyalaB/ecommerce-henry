import React from "react";
import IOrder from "../../../interfaces/IOrder";
import TarjetaOrden from "../TarjetaOrden/TarjetaOrden";

interface IOrdenesProps {
  orden: IOrder[];
}

const ListaOrdenes: React.FC<IOrdenesProps> = ({ orden }) => {
  return (
    <div className="flex flex-col items-center ">
      {orden?.map((item, index) => (
        <React.Fragment key={item.id}>
          <TarjetaOrden {...item} />
          {index !== orden.length - 1 && (
            <div className="w-full h-0.5 bg-gray-200 my-4"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ListaOrdenes;
