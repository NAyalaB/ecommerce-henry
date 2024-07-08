"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ListGroup } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { BsCartCheckFill } from "react-icons/bs";
import { MdListAlt, MdOutlineShoppingCartCheckout } from "react-icons/md";
import DashboardData from "@/Components/DashboardData/DashboardData";
import Orders from "@/Components/Orders/Orders";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("perfil");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  const renderComponent = () => {
    switch (selectedItem) {
      case "perfil":
        return <DashboardData />;
      case "ordenes":
        return <Orders />;
      default:
        return <DashboardData />;
    }
  };

  return (
    <>
      <div
        aria-label="horizontal 1 "
        className="  h-[52px] bg-gradient-to-b from-greenLight via-green-200 to-gray-100"
      ></div>

      <div className="flex h-[calc(100vh-52px)] overflow-y-auto">
        <div
          aria-label="vertical 1"
          className="w-[52px] min-h-fit bg-gradient-to-r from-greenLight via-green-200 to-gray-100 "
        ></div>

        <div className="flex flex-col flex-grow">
         

          <div className="flex flex-grow ">
            <div aria-label="vertical 2">
             
              <ListGroup className="w-52 h-86 ml-4 mt-4 ">
                <ListGroup.Item className=" pb-4" icon={HiUserCircle} active>
                  Mi Cuenta
                </ListGroup.Item>
                <Link href="/dashboard">
                  <ListGroup.Item
                    className="h-5 pb-12"
                    onClick={() => handleItemClick("perfil")}
                    icon={HiUserCircle}
                  >
                    Perfil
                  </ListGroup.Item>
                </Link>
                <div className="w-full h-0.25 bg-gray-200 "></div>
                <Link href="/dashboard/compras">
                  <ListGroup.Item
                    className="h-5 pt-4 pb-12 "
                    icon={BsCartCheckFill}
                  >
                    Mi carrito de compras
                  </ListGroup.Item>
                </Link>
                <div className="w-full h-0.25  bg-gray-200 "></div>
                <ListGroup.Item
                  className="h-5 pt-4 pb-12 border-none "
                  onClick={() => handleItemClick("ordenes")}
                  icon={MdListAlt}
                >
                  Historial de compras
                </ListGroup.Item>

                <Link href="/Productos">
                  <ListGroup.Item
                    className="h-5 pt-1 pb-11 "
                    icon={MdOutlineShoppingCartCheckout}
                  >
                    Seguir comprando
                  </ListGroup.Item>
                </Link>
                <div className="w-full h-0.25 mt-2  bg-gray-200 "></div>
              </ListGroup>
            </div>
            <div
              aria-label="Detalle Items"
              className="flex flex-grow items-start bg-whiteSmoke"
            >
              <div className=" p-6">{renderComponent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
