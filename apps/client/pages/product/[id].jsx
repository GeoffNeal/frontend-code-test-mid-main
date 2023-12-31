import { useState } from 'react';
import Image from 'next/image';

// Components
import Description from '../../components/Description';
import Heading from '../../components/Heading';
import AddToCart from '../../components/AddToCart';
import Specifications from '../../components/Specifications';

// Queries
import getProductQuery from '../../api/queries/getProduct';
import getAllProductsQuery from '../../api/queries/getAllProducts';

// Utils
import { formatSpecs, gqlFetch } from '../../api/utils';

// Assets
import logo from '../../public/octopus-logo.svg';
import basket from '../../public/basket.svg';

const splitAt = (index, iterate) => [iterate.slice(0, index), iterate.slice(index)];

export default function Product({ product }) {
  const formattedPrice = parseFloat(splitAt(-2, `${product.price}`).join('.'));

  const [adjustedPrice, setAdjustedPrice] = useState(formattedPrice);
  const [itemCount, setItemCount] = useState(formattedPrice);
  const [showCount, setShowCount] = useState(false);

  const handleChange = (val) => {
    setAdjustedPrice(val * formattedPrice);
    setItemCount(val);
    setShowCount(false);
  };

  const handleAddToCart = () => {
    setShowCount(true);
  };

  return (
    <div>
      <header className="layout-padding-x flex flex-spread">
        <Image width="150px" height="50px" priority src={logo} alt="Octopus energy" />
        <a href="#" className="flex flex-spread no-text-decoration">
          <Image width="25px" height="25px" priority src={basket} alt="Basket items" />
          <span className="ml-s text-colour-muted" title="Basket items">
            {showCount && itemCount}
          </span>
        </a>
      </header>
      <main>
        <div className="product-img-container layout-padding-x flex flex-center">
          <Image
            width={500}
            height={500}
            src={product.img_url}
            alt={product.name}
            className="rounded-mid"
          />
        </div>

        <Heading title={product.name} power={product.power} quantity={product.quantity} />
        <AddToCart
          price={adjustedPrice.toFixed(2)}
          onIncrement={handleChange}
          onDecrement={handleChange}
          onAddToCart={handleAddToCart}
        />
        <Description content={product.description} />
        <Specifications specifications={product.specifications} />

        <footer className="bg-brand-1 text-colour-muted layout-padding-x layout-padding-y text-size-small">
          <span>Octopus Energy Ltd is a company registered in England and Wales.</span>
          <span>Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT.</span>
          <span>Trading office: 20-24 Broadwick Street, London, W1F 8HT</span>
        </footer>
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
  const res = await gqlFetch('http://127.0.0.1:3001/graphql', getProductQuery(params.id)).then(
    formatSpecs
  );
  return { props: { product: res.data.Product } };
};
