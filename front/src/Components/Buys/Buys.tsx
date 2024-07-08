"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "flowbite-react";
import { BsCartCheckFill } from "react-icons/bs";

import IProduct from "../../../interfaces/IProduct";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { createOrder } from "@/helpers/orders.helper";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BotonSeguirComprando } from "../BotonSeguirComprando/BotonSeguirComprando";

const Buys = () => {
  const router = useRouter();
  const { userData } = useAuth();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCart = 0;
      storedCart.map((item: IProduct) => {
        totalCart += item.price;
      });
      setCart(storedCart);
      setTotal(totalCart);
    }
  }, []);

  const handleClick = async () => {
    const idProducts = new Set(cart.map((product) => product.id));
    await createOrder(Array.from(idProducts), userData?.token!);
    alert("Compra exitosa!");
    setCart([]);
    setTotal(0);
    localStorage.setItem("cart", "[]");
    router.push("/dashboard/ordenes");
  };

  const onRemoveItem = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);

    const newTotal = updatedCart.reduce((accum, item) => accum + item.price, 0);
    setTotal(newTotal);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-16 py-3">
              <span className="sr-only">Image</span>
            </th>
            <th scope="col" className="px-6 py-3">
              Producto
            </th>

            <th scope="col" className="px-6 py-3">
              precio
            </th>
            <th scope="col" className="px-6 py-3">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {cart?.length > 0 ? (
            cart?.map((cart) => (
              <tr
                key={cart.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4">
                  <Image
                    src={cart.image}
                    alt="Apple Watch"
                    width={150}
                    height={150}
                    className="w-16 md:w-32 max-w-full max-h-full"
                  />
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {cart.name}
                </td>

                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                  {cart.price}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => onRemoveItem(cart.id)}
                    className="font-medium text-red-600 dark:text-red-500 hover:underline"
                  >
                    Quitar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center">
                <p>No tienes ningun producto en tu carrito de compras</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {cart.length < 1 ? (
        <></>
      ) : (
        <div>
          <Link href="/Productos">
        <BotonSeguirComprando/>
          </Link>
        <div className="p-4">
          <p className="text-xl font-bold my-4">Total: ${total}</p>
          <Button onClick={handleClick}>
            <BsCartCheckFill className="mr-2 h-5 w-5 " />
            Finalizar Compra
          </Button>
        </div>

        </div>
      )}
    </div>
  );
};

export default Buys;
