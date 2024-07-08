import { IUserSession } from "./IUserSession";

export interface IAuthContextProps {
    userData: IUserSession | null;
    setUserData: (userData: IUserSession | null) => void;
}