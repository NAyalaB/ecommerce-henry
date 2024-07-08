
import { Button } from "flowbite-react";
import { HiShoppingCart } from "react-icons/hi";

export function BotonAgregar() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        <HiShoppingCart className="mr-2 h-5 w-5" />
       Agregar Producto
      </Button>
      
    </div>
  );
}
