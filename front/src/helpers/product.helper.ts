import IProduct from "../../interfaces/IProduct"

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function getProducts(): Promise<IProduct[]> {
    try {
        const res = await fetch (`${apiUrl}/products`,{
            method: 'GET',
            next: {revalidate: 3600},

        })
        const products: IProduct[] = await res.json()
        return products;
    } catch (error: any) {
        throw new Error(error)
    }
}

export async function getProductsByID(id: string) : Promise<IProduct>{
    try {
        const products = await getProducts();
        const product = products.find((product: IProduct) => product.id.toString() === id);

        if(!product) throw new Error("Prducto no encontrado");
        return product;
    } catch (error:any) {
        throw new Error(error)
    }
}