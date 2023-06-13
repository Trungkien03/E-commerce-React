import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Pagination from "../components/Pagination";

export const AllProducts = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Adjust the number of items per page as needed

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);

  return (
    <div className="mt-20">
      <div className="font-bold text-5xl bg-blue-100 h-[150px] flex items-center justify-center">
        All Our Products
      </div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {displayedProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Pagination
            totalItems={products.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};
