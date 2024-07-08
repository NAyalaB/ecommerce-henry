"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const ButtonSingOut: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { userData, setUserData } = useAuth();

  const handleSignOut = () => {
    setUserData(null);
    if (userData?.user) {
      localStorage.clear();
  }};
  return (
      <Link href="/" passHref>
        <button {...props} onClick={handleSignOut}>Cerrar Sesión</button>
      </Link>
  );
};

export default ButtonSingOut;
