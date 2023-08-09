const getProductQuery = (productId) => `{
    Product(id: ${productId}) {
        id
        name
        power
        description
        price
        quantity
        brand
        weight
        height
        width
        length
        model_code
        colour
        img_url
    }
}`;

export default getProductQuery;
