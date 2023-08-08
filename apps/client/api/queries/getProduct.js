const getProductQuery = (productId) => `{
    Product(id: ${productId}) {
        id
        name
        power
        description
        price
        quantity
        brand
        img_url
    }
}`;

export default getProductQuery;