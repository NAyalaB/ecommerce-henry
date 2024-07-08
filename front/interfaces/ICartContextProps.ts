import  IOrder  from "./IOrder";

export interface ICartContextProps {
    cart: IOrder[];
    setCart: React.Dispatch<React.SetStateAction<IOrder[]>>;
    total: number;
    setTotal:  React.Dispatch<React.SetStateAction<number>>;
}