export interface IUserSession {
    token: string;
    user: {
        address: string;
        email: string;
        id: number;
        name: string
        phone: string;
        orders: []
        role: string
    }
}