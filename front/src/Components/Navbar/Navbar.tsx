"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import ButtonSingIn from "../ButtonSingIn/ButtonSingIn";
import { useAuth } from "@/context/AuthContext";
import ButtonSingOut from "../ButtonSingOut/ButtonSingOut";
import Link from "next/link";
import CreateAccount from "../CreateAccount/CreateAccount";
import ImagenAvatar from "../Avatar/Avatar";
import BotonLogueo from "../BotonLogueo/BotonLogueo";

const Navbar: React.FC = () => {
  const { userData } = useAuth();
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleAddToAccount = (elem: any) => {
    if (!userData?.token) {
      elem.preventDefault();
      alert("Debe iniciar sesión para acceder a su cuenta");
    }
  };

  const handleAddToCart = (elem: any) => {
    if (!userData?.token) {
      elem.preventDefault();
      alert("Debe iniciar sesión para acceder a su carrito de compras");
    }
  };

  return (
    <nav className="flex flex-1 items-center h-14 shrink-0 rounded-xl bg-blueSky shadow-blue mt-9 ml-5 mr-5 ">
      <div className="w-full md:w-1/2 lg:w-full flex flex-wrap flex-1 justify-between items-center">
        <Link href="/">
          <Image
            className={styles.logo}
            src="/assets/logo.png"
            alt="Logo"
            width={55}
            height={38}
          />
        </Link>
        <div className="flex flex-col items-start ml-4 ">
          <span className="text-xl bg-gradient-to-l from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent font-bold ">Nuevo</span>
          <span className="text-xl bg-gradient-to-l from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent font-bold">Ayer</span>
        </div>

        <ul className={styles.lista}>
          <li className={styles.itemInicial}>
            <Link href="/" legacyBehavior>
              <a
                className={`${styles.navLink} ${
                  activeLink === "INICIO" ? styles.navLink_active : ""
                }`}
                href=""
                onClick={() => handleLinkClick("INICIO")}
              >
                {" "}
                INICIO
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/guia" legacyBehavior>
              <a
                className={`${styles.navLink} ${
                  activeLink === "GUIA / AYUDA" ? styles.navLink_active : ""
                }`}
                href=""
                onClick={() => handleLinkClick("GUIA / AYUDA")}
              >
                {" "}
                GUIA / AYUDA
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/Productos" legacyBehavior>
              <a
                className={`${styles.navLink} ${
                  activeLink === "PRODUCTOS" ? styles.navLink_active : ""
                }`}
                href=""
                onClick={() => handleLinkClick("PRODUCTOS")}
              >
                {" "}
                PRODUCTOS
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/dashboard" legacyBehavior>
              <a
                className={`${styles.navLink} ${
                  activeLink === "Mi CUENTA" ? styles.navLink_active : ""
                }`}
                href=""
                onClick={(elem) => {
                  handleLinkClick("MI CUENTA");
                  handleAddToAccount(elem);
                }}
              >
                {" "}
                MI CUENTA
              </a>
            </Link>
          </li>
        </ul>

        <div className={styles.divButton}>
          {!userData ? (
            <>
              <BotonLogueo ariaLabel="Iniciar sesión" >
              <ButtonSingIn />
              </BotonLogueo>

              <BotonLogueo ariaLabel="Crear cuenta">
              <CreateAccount />
              </BotonLogueo>

             
                </>
          ) : (
            <div className={styles.divButton}>
              <Link href="/dashboard">
                <div className="flex items-center mr-4">
                  <p aria-label="Usuario" className={styles.nombreUsuario}>
                    Hola, {userData.user.name}
                  </p>
                  <div>
                    <ImagenAvatar />
                  </div>
                </div>
              </Link>
              <BotonLogueo ariaLabel="Cerrar sesion">
              <ButtonSingOut/>
              </BotonLogueo>
              
            </div>
          )}
        </div>
        <Link href="/dashboard/compras">
          <Image
            className={styles.carrito}
            src="/assets/carrito.png"
            alt="Carrito de Compras"
            width={80}
            height={48}
            onClick={(elem) => handleAddToCart(elem)}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
