import React, { useState, useEffect } from "react";
import Product from "../componants/products/Product";
import Bag from "../componants/products/Bag";
import LeftSideBar from "../componants/products/LeftSideBar";
import { useParams } from "react-router-dom";
import { productsData } from "../assets/data/productData";

function Products() {
  const [apiInfo, setApiInfo] = useState("");
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // check for products with category matching url param
  useEffect(() => {
    const matchingProducts = productsData.filter(
      (item) => item.category === category
    );
    // set as products to display
    setProducts(matchingProducts);
  }, [category]);

  // if category === electronics fetch from fake store api
  useEffect(() => {
    if (category === "electronics") {
      fetch("https://fakestoreapi.com/products/category/electronics")
        .then((response) => response.json())
        // set as products to display
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
      setApiInfo("this data from Fake Store API");
    } else {
      setApiInfo("");
    }
  }, [category]);

  // handle the search and filter products
  useEffect(() => {
    // filter based on user input stored in the searchQuery
    const searchResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    // set as products to display
    setFilteredProducts(searchResults);
  }, [searchQuery, products]);

  return (
    <div className=" w-full h-full bg-[#f1f1f1] flex relative ">
      <LeftSideBar />

      <div className=" md:mx-[70px] lg:mx-[100px] flex flex-col w-full md:max-w-[70%] min-h-[94vh]  ">
        <div className="flex w-full items-center justify-center h-[100px] p-[10px] mb-[30px]">
          <div className="flex flex-col justify-start p-[8px] w-[380px]">
            <h1 className="flex w-full justify-center text-[30px] font-extralight mt-[50px] ">
              {category}
            </h1>
            <div className=" flex w-full justify-center text-red-600 text-[14px] ">
              {apiInfo}
            </div>
            <p className=" pl-[3px] text-[#454545] text-[12px] mt-[20px] ">
              Search Item
            </p>
            <input
              type="text"
              className="flex h-[35px] rounded-md text-[13px] py-[5px] px-[10px]"
              placeholder=" iPhone 15... "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-evenly ">
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              model={product.model}
              price={product.price}
            />
          ))}
        </div>
      </div>

      <Bag />
    </div>
  );
}

export default Products;
