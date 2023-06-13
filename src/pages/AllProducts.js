import React, { useContext, useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import Pagination from "../components/Pagination";
import { SearchBar } from "../components/SearchBar";

export const AllProducts = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Điều chỉnh số lượng sản phẩm trên mỗi trang tùy theo nhu cầu
  const [searchTerm, setSearchTerm] = useState("");

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  // Lọc danh sách sản phẩm theo từ khóa tìm kiếm
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính toán phạm vi chỉ mục cho trang hiện tại
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <div className="mt-20">
      <div className="font-bold text-5xl bg-blue-100 h-[150px] flex items-center justify-center">
        All Our Products
      </div>
      <SearchBar onSearch={handleSearch} /> {/* Truyền hàm handleSearch vào props onSearch */}
      <section className="py-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {displayedProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
    </div>
  );
};
