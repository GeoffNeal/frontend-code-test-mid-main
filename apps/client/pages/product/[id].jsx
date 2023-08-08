export default function Product({ product }) {
  return (
    <main>
      <h1>{product.name}</h1>
    </main>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch('http://127.0.0.1:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
            allProducts {
              id
              name
            }
          }`,
    }),
  }).then((r) => r.json());

  const products = res.data.allProducts;

  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async () => {
  const res = await fetch('http://127.0.0.1:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
            Product(id: 1) {
              id
              name
            }
          }`,
    }),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log('data returned:', JSON.stringify(data));
      return data;
    });
  return { props: { product: res.data.Product } };
};
