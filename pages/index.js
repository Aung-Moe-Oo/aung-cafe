import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import { data } from "../data";
import CartProvider from "../store/CartProvider";

export default function Home({ products }) {
  return (
    <CartProvider>
      <Navbar />
      <Head>
        <title>Aung Cafe</title>
      </Head>
      <Hero />
      <Products products={products} />
      <Footer />
    </CartProvider>
  );
}

export const getStaticProps = async () => {
  const products = data;
  return {
    props: { products },
  };
};
