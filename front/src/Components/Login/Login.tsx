"use client";
import { validateFormLogin } from "@/helpers/formValidation";
import React, { useState, useEffect } from "react";
import { ILoginProps } from "../../../interfaces/ILoginProps";
import { ILoginErrorProps } from "../../../interfaces/ILoginErrorProps";
import { login } from "@/helpers/authHelper";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";


const Login = () => {
  const {userData, setUserData} = useAuth();
  const router = useRouter();
  const [dataUser, setDataUser] = useState<ILoginProps>({
    email: "",
    password: "",
  });
  const [errorUser, setErrorUser] = useState<ILoginErrorProps>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await login(dataUser);
    alert("Logueo exitoso!")
    const {token, user} = response;
    setUserData({token, user: user})
    router.push("/")
  
    const errors = validateFormLogin(dataUser);
    setErrorUser(errors);

    if (Object.values(errors).every((error) => error === "")) {
        console.log("Ingreso exitoso");
      } else {
        console.log("Usuario y/o contraseña incorrecta", errors);
      }

  };

  useEffect(() => {
    const errors = validateFormLogin(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div className="p-6">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold">Ingresar a Nuevo Ayer!</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col items-center justify-center">

          <div className=" flex flex-col  w-1/3 mb-10 box-border font-sans font-normal not-italic ">

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
            <label htmlFor="password" className="mb-1">Contraseña:</label>
            <div className="relative w-full">
            <input  className="w-full h-[50px] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-blueDeep"
              id="password"
              type="password"
              name="password"
              value={dataUser.password}
              onChange={handleChange}
              placeholder="********"
            />
            {errorUser.password && <p className="text-red-500 text-xs absolute bottom-[-1.5rem] left-0">{errorUser.password}</p>}

            </div>
          </div>
        </div>

        <div className="group flex justify-center mt-4">
          <button
            type="submit"
            className="px-6 py-2 bg-blueSky group-hover:bg-blueDeep  max-w-sm content-center rounded-lg"
          >
            Loguearse
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
