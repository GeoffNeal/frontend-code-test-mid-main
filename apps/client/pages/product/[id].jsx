import Image from 'next/image';
import logo from '../../public/octopus-logo.svg';
import basket from '../../public/basket.svg';

export default function Product({ product }) {
  return (
    <div className="layout">
      <header>
        <Image width="150px" height="50px" priority src={logo} alt="Octopus energy" />

        <Image width="25px" height="25px" priority src={basket} alt="Shopping cart" />
      </header>
      <main>
        <div className="product-img-container">
          <Image
            width={500}
            height={500}
            src={product.img_url}
            alt={product.name}
            className="product-img"
          />
        </div>

        <h1>{product.name}</h1>
      </main>
    </div>
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
        }
      }`,
    }),
  }).then((r) => r.json());

  const products = res.data.allProducts;

  // Get the paths we want to prerender based on products
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch('http://127.0.0.1:3001/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
        Product(id: ${params.id}) {
          id
          name
          img_url
        }
      }`,
    }),
  }).then((r) => r.json());

  return { props: { product: res.data.Product } };
};
