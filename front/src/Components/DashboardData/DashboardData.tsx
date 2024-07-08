"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";
import { Card } from "flowbite-react";

const DashboardData = () => {
  const { userData } = useAuth();
  return (
    <div >
    <Card className="w-600 m-2 ml-8">
      <h5 className="flex items-center justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Bienvenid@, {userData?.user.name}
      </h5>
      
    </Card>

    <Card className="w-600 mt-4 ml-8">
    <p className="font-normal text-gray-700 dark:text-gray-400 ">
       Dirección: {userData?.user.address}
          </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Telefono: {userData?.user.phone}
      </p>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        E-mail: {userData?.user.email}
      </p>
    </Card>

    </div>
    
  );
};

export default DashboardData;
