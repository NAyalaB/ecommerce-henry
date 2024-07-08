import IProduct from "./IProduct";

interface IOrder{
    id: number;
    status: string;
    date: Date;
    products: IProduct[]
}

export default IOrder;