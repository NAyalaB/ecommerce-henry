"use client";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";
import IOrder from "../../../interfaces/IOrder";
import { getOrders } from "@/helpers/orders.helper";
import { useCart } from "@/context/CartContext";
import ListaOrdenes from "../ListaOrdenes/ListaOrdenes";

const Orders = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { userData } = useAuth();

  const fetchData = async () => {
    const ordersResponse = await getOrders(userData?.token!);
    setOrders(ordersResponse);
  };

  useEffect(() => {
    userData?.token && fetchData();
  }, [userData?.token]);

  return (
    <div>
      {orders.length > 0 ? (
        <ListaOrdenes orden={orders} />
      ) : (
        <p className="text-xl font-bold my-4"> No tienes ninguna orden</p>
      )}
    </div>
  );
};

export default Orders;
