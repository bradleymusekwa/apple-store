import React, { useState, useEffect } from "react";
import Bag from "../componants/products/Bag";
import LeftSideBar from "../componants/products/LeftSideBar";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import RelatedProducts from "../componants/products/RelatedProducts";
import { productsData } from "../assets/data/productData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cart/cartSlice";

function Product() {
  const dispatch = useDispatch();

  // get id from url params
  const { id } = useParams();

  // convert id from string to number
  const numId = parseInt(id);

  // store product to be displayed
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  // get category from product
  const category = product.category;

  // capture product to be displayed
  useEffect(() => {
    const fetchData = async () => {
      if (numId < 100) {} else {
        const productToDisplay = productsData.find(
          (product) => product.id === numId
        );
        setProduct(productToDisplay);
      }
    };

    fetchData();
  }, [numId]);

  // caputure similar products
  useEffect(() => {
    const similarProduct = productsData.filter(
      (product) => product.category === category
    );
    setRelatedProducts(similarProduct);
  }, [id, category]);

  // distructure rating object to access rate and count
  const { rating } = product;

  return (
    <div className="flex bg-[#f1f1f1] w-full min-h-[92vh]">
      {/* DESKTOP VIEW */}
      <div className="hidden w-full min-h-[92vh]  md:flex relative ">
        {/* left icon bar with icons */}
        <LeftSideBar />
        <div className="flex flex-col max-w-[70%] md:ml-[85px] lg:ml-[110px] pt-[30px] px-[20px] ">
          <Link to={`/products/${product.category}`}>
            <div className="flex justify-start items-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-[12px] ml-[5px] "
              />
              <span className="ml-[10px] text-[12px]">{product.category}</span>
            </div>
          </Link>
          {/* middle */}
          <div className="flex w-[68vw] mt-[20px] ">
            {/* relaled */}
            <div className=" hidden lg:flex flex-col w-[100px] items-center ">
              Related
              <div className="flex flex-col w-[100px] items-center">
                {relatedProducts.slice(0, 4).map((item) => (
                  <RelatedProducts
                    key={item.id}
                    id={item.id}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
            {/* main product details */}
            <div className=" flex w-[60vw]  ">
              <div className="flex flex-col items-center justify-center bg-white w-[280px] h-[355px] rounded-[15px]">
                <img
                  src={product.image}
                  alt=""
                  className="w-[220px] object-contain"
                />
                <div className=" hidden md:flex lg:hidden  flex-col w-full items-center mt-[10px] text-[20px] underline font-semibold ">
                  Related
                  <div className="flex  w-full mx-auto justify-evenly mt-[10px] items-center">
                    {relatedProducts.slice(0, 3).map((item) => (
                      <RelatedProducts
                        key={item.id}
                        id={item.id}
                        image={item.image}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="md:ml-[15px] flex flex-col w-[35vw] lg:ml-auto mt-[5px] ">
                <h1 className="text-[35px] font-semibold"> {product.title} </h1>
                <h3 className="text-[25px] text-[#7e7e7e]">{product.model}</h3>
                <div className="flex items-center my-[15px]">
                  {rating && (
                    <>
                      {[...Array(Math.round(rating.rate))].map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className="text-[17px] mr-[5px]"
                        />
                      ))}
                    </>
                  )}
                  <span className="flex ml-[10px]">
                    {rating ? rating.rate : null}
                  </span>
                  <span className="flex ml-[30px]">
                    Ratings: {rating ? rating.count : null}
                  </span>
                </div>
                <div className="text-[25px] font-semibold">
                  R{product.price}
                </div>
                <p className="my-[20px]">{product.description}</p>
                <div className="flex w-full justify-end">
                  <button
                    onClick={() => {
                      dispatch(addToCart(product));
                    }}
                    className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-black rounded-[9px] "
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z"
                        fill="white"
                      />
                    </svg>
                    <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
                      Add to Bag
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[100%] justify-center ">
            <hr className="border border-[#454545] w-[800vw] mt-[60px] mb-[20px]" />
          </div>
          <div className="flex w-[100%] flex-col">
            <p className="text-600 font-bold underline mb-[10px]">
              Description
            </p>
            <div className="flex my-[2px]">
             
              <span className="">
              Discover a world of innovation with Apple products. From the sleek and powerful iPhone, 
              to the intuitive iPad and the cutting-edge Mac, Apple offers a seamless blend of technology and design. 
              With top-notch performance, stunning displays, and a seamless ecosystem, Apple products redefine the way you work, 
              play, and stay connected. Explore the range of Apple products to experience the perfect combination of style and 
              functionality.
              </span>
            </div>
          </div>
        </div>
        {/* right side with cart products */}
        <Bag />
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden w-full min-h-[92vh] relative flex flex-col mb-[80px] ">
        <div className="flex items-center justify-center bg-white mx-auto w-[90vw] mt-[20px] h-[355px] rounded-[15px]">
          <img
            src={product.image}
            alt=""
            className="w-[220px] object-contain"
          />
        </div>
        <div className="flex flex-col w-[90vw] mx-auto  mt-[10px] ">
          <h1 className="text-[25px] font-semibold"> {product.title} </h1>
          <h3 className="text-[25px] text-[#7e7e7e]">{product.model}</h3>
          <div className="flex items-center my-[15px]">
            {rating && (
              <>
                {[...Array(Math.round(rating.rate))].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    icon={faStar}
                    className="text-[17px] mr-[5px]"
                  />
                ))}
              </>
            )}
            <span className="flex ml-[10px]">
              {rating ? rating.rate : null}
            </span>
            <span className="flex ml-[30px]">
              Ratings: {rating ? rating.count : null}
            </span>
          </div>
          <div className="text-[20px] font-semibold">R{product.price}</div>
          <p className="my-[20px]">{product.description}</p>
          <div className="flex w-full justify-evenly">
            <Link to="/cart">
              <button className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-black rounded-[9px] ">
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
                    fill="white"
                  />
                </svg>
                <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
                  View Bag
                </p>
              </button>
            </Link>
            <button
              onClick={() => {
                dispatch(addToCart(product));
              }}
              className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-black rounded-[9px] "
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z"
                  fill="white"
                />
              </svg>
              <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
                Add to Bag
              </p>
            </button>
          </div>
        </div>
        {/* relaled */}
        <div className="flex flex-col w-full items-center mt-[40px] text-[20px] underline font-semibold ">
          Related
          <div className="flex w-[80vw] mx-auto justify-evenly mt-[10px] items-center">
            {relatedProducts.slice(0, 4).map((item) => (
              <RelatedProducts key={item.id} id={item.id} image={item.image} />
            ))}
          </div>
        </div>

        <div className="flex w-[100%] justify-center ">
          <hr className="border border-[#454545] w-[90vw] mt-[30px] mb-[20px]" />
        </div>
        <div className="flex w-[100%] flex-col">
            <p className="text-600 font-bold underline mb-[10px]">
              Description
            </p>
            <div className="flex my-[2px]">
             
              <span className="">
              Discover a world of innovation with Apple products. From the sleek and powerful iPhone, 
              to the intuitive iPad and the cutting-edge Mac, Apple offers a seamless blend of technology and design. 
              With top-notch performance, stunning displays, and a seamless ecosystem, Apple products redefine the way you work, 
              play, and stay connected. Explore the range of Apple products to experience the perfect combination of style and 
              functionality.
              </span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Product;
