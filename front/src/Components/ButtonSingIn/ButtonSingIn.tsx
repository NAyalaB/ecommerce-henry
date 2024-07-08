"use client"
import React from "react";
import { useAuth } from "@/context/AuthContext"
import Link from 'next/link';
import ImagenAvatar from "../Avatar/Avatar";

const ButtonSingIn = () => {
    const {userData} = useAuth();
    return (
        userData?.token ? (
            <div>
                <Link href="/dashboard">
                <ImagenAvatar/>
                {/* <p>{userData.user.name}</p> */}
                </Link>
            </div>
        ) : (
            <div>
            <Link href="/login">
            <p >Iniciar Sesión</p>
            </Link>
        </div>
        )
    )
}

export default ButtonSingIn