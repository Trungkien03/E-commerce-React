import React from "react";
import { useContext } from "react";
// import project context
import { ProductContext } from "../contexts/ProductContext";
import Product from '../components/Product';
import Hero from "../components/Hero";

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  //get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      // item.category !== "electronics";
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <div>
      <Hero/>
      <div className="mt-20 text-gray-300 font-bold text-5xl bg-gray-600 h-[200px] flex items-center justify-center">Mens And Womens Clothes</div>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                <Product product={product} key={product.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
