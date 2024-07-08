import { ILoginProps } from "../../interfaces/ILoginProps"
import { IRegisterProps } from "../../interfaces/IRegisterProps"

const apiUrl = process.env.NEXT_PUBLIC_API_URL



export async function register(userData: IRegisterProps) {
    try {
        const res = await fetch (`${apiUrl}/users/register`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)

        })
        if (res.ok){
            return res.json()
        } else { 
            alert ("Error al registrarse")
            throw new Error ("Error al registrarse")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}

export async function login(userData: ILoginProps) {
    try {
        const res = await fetch (`${apiUrl}/users/login`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)

        })
        if (res.ok){
            return res.json()
        } else { 
            alert ("Error al loguearse")
            throw new Error ("Error al loguearse")
        }

    } catch (error: any) {
        throw new Error(error)
    }
}

