import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import IOrder from "../../../interfaces/IOrder";
import Link from "next/link";

const TarjetaOrden: React.FC<IOrder> = ({ status, date, products }) => {
  return (
    <div className="overflow-x-auto shadow-lg">

<table className="w-full table-auto ">
        <thead >
          <tr >
            <th
              colSpan={2}
              className="bg-blueTeal text-center"
              style={{ height: '40px', width: '30%' }}
            >
             Fecha de Orden N° :
            </th>
            <th
              colSpan={2}
              className="bg-blueTeal  text-center"
              style={{ height: '40px', width: '70%' }}
            >
               {new Date(date).toLocaleDateString()}
            </th>
          </tr>
        </thead>
      </table>



      <Table hoverable  >
   
   

   

        <TableHead >
        

          <TableHeadCell className="text-center text-sm bg-gray-200">Producto</TableHeadCell>
          <TableHeadCell  className="text-center text-sm bg-gray-200">Descripción</TableHeadCell>
          <TableHeadCell className="text-center text-sm bg-gray-200">Precio</TableHeadCell>
          <TableHeadCell className=" text-center text-sm bg-gray-200">
            Volver a comprar
          </TableHeadCell>

     
      
        </TableHead>

        <TableBody className="divide-y">
          {products.map((products) => (
            <TableRow
              key={products.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              <TableCell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
                {products.name}
              </TableCell>
              <TableCell className="text-center">{products.description}</TableCell>
              <TableCell className="text-center">${products.price}</TableCell>

              <TableCell className="text-center">
              <Link  href={`/Productos/${products.id}`}
                  className="font-medium  text-cyan-600 hover:underline dark:text-cyan-500">
               Ir
              </Link>
                 
               
                 
             
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TarjetaOrden;
