import Link from 'next/link';
import Image from 'next/image';

// Queries
import getAllProductsQuery from '../../api/queries/getAllProducts';

// Utils
import { gqlFetch } from '../../api/utils';

const Product = ({ product }) => {
  const { id, img_url } = product;
  return (
    <Link href={`/product/${id}`}>
      <div className="product-img-container layout-padding-x flex flex-center mb flex flex-col">
        <Image width={500} height={500} src={img_url} alt={id} className="rounded-mid" />
        <div className="layout-padding-x layout-padding-y colour-brand-2">
          <h3>{`Product ${id}`}</h3>
        </div>
      </div>
    </Link>
  );
};

export default function Products({ products }) {
  return (
    <main>
      <h1 className="layout-padding-x">Products</h1>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </main>
  );
}

export const getStaticProps = async ({ params }) => {
  const res = await gqlFetch('http://127.0.0.1:3001/graphql', getAllProductsQuery);
  const products = res.data.allProducts;
  return { props: { products } };
};
