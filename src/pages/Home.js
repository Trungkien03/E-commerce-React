import React from "react";
import { useContext } from "react";
// import project context
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  //get products from product context
  const { products } = useContext(ProductContext);
  //get only men's & women's clothing category
  const filteredProducts = products.filter((item) => {
    return (
      // item.category !== "electronics";
      item.category === "men's clothing"
    );
  });

  return (
    <div>
      <Hero />
      <div className="mt-20 text-gray-300 font-bold text-5xl bg-gray-600 h-[200px] flex items-center justify-center">
        Mens And Womens Clothes
      </div>
      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      <a
          href="/allProducts"
          class=" text-white lg:max-w-[200px] flex flex-row items-center justify-center w-full px-4 py-4 mb-4 text-sm font-bold bg-gray-700 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1"
        >
          View More
          <span class="ml-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              class="w-5 h-5 fill-current"
            >
              <path
                fill="currentColor"
                d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"
              ></path>
            </svg>
          </span>
        </a>
    </div>
  );
};

export default Home;
