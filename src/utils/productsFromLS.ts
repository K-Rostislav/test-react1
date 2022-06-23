export const productsFromLS = () => {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
}