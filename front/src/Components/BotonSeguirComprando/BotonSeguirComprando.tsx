import { Button } from "flowbite-react";
import Link from "next/link";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

export function BotonSeguirComprando() {
  return (
    <div className="flex justify-center ">
        <Link href="/Productos">
      <Button >
        <MdOutlineShoppingCartCheckout className="mr-2 h-5 w-5 " />
       Seguir Comprando
      </Button>
        </Link>
      
    </div>
  );
}
