export const gqlFetch = async (endpoint, query) => {
  return await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query }),
  }).then((r) => r.json());
};

export const formatSpecs = (data) => {
  console.log('DATA: ', data);
  if (!data?.data?.Product) {
    throw new Error('Expected data to contain a `Product` key');
  }
  const { brand, weight, height, width, length, model_code, colour, ...rest } = data.data.Product;
  return {
    data: {
      Product: {
        ...rest,
        specifications: {
          brand,
          weight,
          dimensions: `${height} x ${width} x ${length}`,
          model_code,
          colour,
        },
      },
    },
  };
};
