export const productsCountFromLS = () => {
    const data = localStorage.getItem('count');
    return data ? Number(JSON.parse(data)) : 0;
}