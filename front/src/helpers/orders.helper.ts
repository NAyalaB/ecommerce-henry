const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(products: number[], token: string) {
  try {
    const res = await fetch(`${apiUrl}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
        'ngrok-skip-browser-warning':'true',   
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
        'ngrok-skip-browser-warning':'true',   
      }
    })
    const orders = await res.json();
    return orders;
  } catch (error: any) {
    throw new Error(error);
  }
}


