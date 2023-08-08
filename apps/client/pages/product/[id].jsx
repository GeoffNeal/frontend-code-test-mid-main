import Image from 'next/image';

// Components
import Description from '../../components/Description';

// Queries
import getProductQuery from '../../api/queries/getProduct';
import getAllProductsQuery from '../../api/queries/getAllProducts';

// Utils
import { gqlFetch } from '../../api/utils';

// Assets
import logo from '../../public/octopus-logo.svg';
import basket from '../../public/basket.svg';

export default function Product({ product }) {
  return (
    <div>
      <header className='layout-padding'>
        <Image width="150px" height="50px" priority src={logo} alt="Octopus energy" />

        <Image width="25px" height="25px" priority src={basket} alt="Shopping cart" />
      </header>
      <main>
        <div className="product-img-container layout-padding">
          <Image
            width={500}
            height={500}
            src={product.img_url}
            alt={product.name}
            className="product-img"
          />
        </div>

        <h1 className='layout-padding'>{product.name}</h1>
        <Description />
      </main>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await gqlFetch('http://127.0.0.1:3001/graphql', getAllProductsQuery);
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
  const res = await gqlFetch('http://127.0.0.1:3001/graphql', getProductQuery(params.id));
  return { props: { product: res.data.Product } };
};
