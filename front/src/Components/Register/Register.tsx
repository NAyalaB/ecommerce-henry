
"use client";
import { validateFormRegister } from "@/helpers/formValidation";
import React, { useState, useEffect } from "react";

import { IRegisterProps } from "../../../interfaces/IRegisterProps";
import { IRegisterErrorProps } from "../../../interfaces/IRegisterErrorProps";
import { register } from "@/helpers/authHelper";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<IRegisterProps>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    phone: "",
  });

  const [errorUser, setErrorUser] = useState<IRegisterErrorProps>({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await register(dataUser)
    alert ("Registro exitoso!")
    router.push("/login")

    const errors = validateFormRegister(dataUser);
    setErrorUser(errors);

    if (Object.values(errors).every((error) => error === "")) {
      console.log("Registro exitoso");
    } else {
      console.log("Errores en el formulario", errors);
    }
  };
  useEffect(() => {
    const errors = validateFormRegister(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div className="p-6">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold">Registrarse a Nuevo Ayer!</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-wrap items-start justify-center space-x-4">
          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic  ">
            <label htmlFor="email-address" className="mb-1">
              Email:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="email-address"
                type="email"
                name="email"
                value={dataUser.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
              {errorUser.email && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.email}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic ">
            <label htmlFor="password" className="mb-1">
              Contraseña:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="password"
                type="password"
                name="password"
                value={dataUser.password}
                onChange={handleChange}
                placeholder="Minimo 8 caracteres, un letra y un numero"
              />
              {errorUser.password && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.password}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic   ">
            <label htmlFor="confirm-password" className="mb-1">
              Confirmar contraseña:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="confirm-password"
                type="password"
                name="confirmPassword"
                value={dataUser.confirmPassword}
                onChange={handleChange}
                placeholder="Las contraseñas deben coincidir"
              />
              {errorUser.confirmPassword && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.confirmPassword}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic ">
            <label htmlFor="name" className="mb-1">
              Nombre:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="name"
                type="text"
                name="name"
                value={dataUser.name}
                onChange={handleChange}
                placeholder="Nombre y Apellido"
              />
              {errorUser.name && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.name}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic ">
            <label htmlFor="address" className="mb-1">
              Dirección:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="address"
                type="text"
                name="address"
                value={dataUser.address}
                onChange={handleChange}
                placeholder="Av San Martin N° 100"
              />
              {errorUser.address && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.address}
                </p>
              )}
            </div>
          </div>

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic ">
            <label htmlFor="phone" className="mb-1">
              Telefono:
            </label>
            <div className="relative w-full">
              <input
                className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
                id="phone"
                type="text"
                name="phone"
                value={dataUser.phone}
                onChange={handleChange}
                placeholder="00 0000 0000"
              />
              {errorUser.phone && (
                <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">
                  {errorUser.phone}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="group flex justify-center mt-4">
          <button
           /*  disabled={Object.values(errorUser).some(error => error !== "")} */
            type="submit"
            className="px-6 py-2 bg-blueSky group-hover:bg-blueDeep  max-w-sm content-center rounded-lg"
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};
export default Register;
