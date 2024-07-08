import { ILoginErrorProps } from "../../interfaces/ILoginErrorProps";
import { ILoginProps } from "../../interfaces/ILoginProps";
import { IRegisterErrorProps } from "../../interfaces/IRegisterErrorProps";
import { IRegisterProps } from "../../interfaces/IRegisterProps";

export function validateFormLogin(dataUser: ILoginProps) {
let errors: ILoginErrorProps = {
}

if(!dataUser.email){
    errors.email = "El email es requerido.";
} else if (!/^.+@.+\..+$/.test(dataUser.email)){
    errors.email = "El email no es valido"
} else if (!dataUser.password){
    errors.password = "La contraseña es requerida.";
} else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(dataUser.password)) {
    errors.password = "La contraseña no es valida.";
}

    return errors;
}

export function validateFormRegister(dataUser: IRegisterProps) {
    let errors: IRegisterErrorProps = {
    }
    
    if(!dataUser.email){
        errors.email = "El email es requerido.";
    } else if (!/^.+@.+\..+$/.test(dataUser.email)){
        errors.email = "El email no es valido"
    } else if (!dataUser.password){
        errors.password = "La contraseña es requerida.";
    } else if (!/^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(dataUser.password)) {
        errors.password = "Minimo 8 caracteres, un letra y un numero.";
    } else if (!dataUser.name){
        errors.name = "El nombre no es requerido.";
    } else if (!/^\S+(\s+\S+){1,}$/.test(dataUser.name)){
        errors.name = "Debe contener nombre y apellido"
    } else if (!dataUser.address){
        errors.address = "La dirección e requerida.";
    } else if (!dataUser.phone){
        errors.phone = "El numero de telefono es requerido.";
    } else if (dataUser.confirmPassword !== dataUser.password){
        errors.confirmPassword = "Las contraseñas no coinciden.";
    }
    
        return errors;
    }