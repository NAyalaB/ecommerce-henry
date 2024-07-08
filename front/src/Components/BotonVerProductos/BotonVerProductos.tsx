
import { Button } from "flowbite-react";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

export function BotonVerProductos() {
  return (
    <div className="flex justify-center ">
        <Link href="/Productos">
      <Button >
        <HiShoppingCart className="mr-2 h-5 w-5 " />
        Ver Productos
      </Button>
        </Link>
      
    </div>
  );
}
