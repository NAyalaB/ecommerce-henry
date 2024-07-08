 "use client"
import React from "react";
import { useAuth } from "@/context/AuthContext"
import Link from 'next/link';

const CreateAccount = () => {
  
  return (
    <>
      <Link href="/register" passHref>
        Crear cuenta
      </Link>
    </>
  );
};

export default CreateAccount; 