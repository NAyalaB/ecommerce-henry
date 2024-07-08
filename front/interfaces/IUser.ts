interface IUser{
    id: number,
    name: string,
    email: string,
    address: string,
    phone: string,
    role: Role,
}

export enum Role{
    ADMIN = "admin",
    USER = "user"
}

export default IUser;