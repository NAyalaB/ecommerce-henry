const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        products,
      }),
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function getOrders(token: string) {
  try {
    const res = await fetch(`${apiUrl}/users/orders`, {
      method: "GET",
      headers: {
        Authorization: token,
      }
    })
    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}

/* export async function getOrders(token: string) {
    try {
        const res = await fetch(`${apiUrl}/orders`, {
            method: 'GET',
            headers: {
                Authorization: token,
            }
        });

        if (!res.ok) {
            const errorData = await res.text();
            throw new Error(`Error ${res.status}: ${errorData}`);
        }

        const orders = await res.json();
        return orders;
    } catch (error: any) {
        throw new Error(error.message);
    }
} */
