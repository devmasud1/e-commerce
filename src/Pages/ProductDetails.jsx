import { Link, useLoaderData, useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const ProductDetails = () => {
  const navigate = useNavigate()
  const product = useLoaderData();
  const { title, description, thumbnail, stock, rating, price, images } =
    product;
  

    const AddToCart = () => {
        swal({
            title: `${title}`,
            text: "successfully added to your cart",
            icon: "success",
            dangerMode: true,
          })

     
          navigate("/products")
    }
 
  return (
    <div className="flex justify-between gap-10">
      <div className="grid gap-4 w-[50%]">
        <div className="w-full">
          <img
            className="max-h-[350px] w-full rounded-lg"
            src={thumbnail}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="m-auto p-2" style={{ border: "1px solid red" }}>
            <img
              className="h-16 max-w-full rounded-lg"
              src={images[0]}
              alt=""
            />
          </div>
          <div className="m-auto p-2" style={{ border: "1px solid red" }}>
            <img
              className="h-16 max-w-full rounded-lg"
              src={images[1]}
              alt=""
            />
          </div>
          <div className="m-auto p-2" style={{ border: "1px solid red" }}>
            <img
              className="h-16 max-w-full rounded-lg"
              src={images[2]}
              alt=""
            />
          </div>
          <div className="m-auto p-2" style={{ border: "1px solid red" }}>
            <img
              className="h-16 max-w-full rounded-lg"
              src={images[3]}
              alt=""
            />
          </div>
          <div className="m-auto p-2" style={{ border: "1px solid red" }}>
            <img
              className="h-16 max-w-full rounded-lg"
              src={images[4]}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <h5 className="text-lg tracking-tight text-gray-900 dark:text-white my-4">
          {description}
        </h5>
        <h4>stock: {stock}</h4>
        <div className="flex items-center mt-2.5 mb-5">
          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <svg
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>

          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {rating}
          </span>
        </div>
        <hr className="flex-grow: grow" />
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <Link onClick={AddToCart}
          
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </Link>
        </div>
      </div>
    </div>
    // <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //   <a href="#">
    //     <img className="p-8 rounded-t-lg" src={thumbnail} alt="product image" />
    //   </a>
    //   <div className="px-5 pb-5">
    //     <a href="#">
    //       <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
    //         {title}
    //       </h5>
    //     </a>
    //     <div className="flex items-center mt-2.5 mb-5">
    //       <svg
    //         className="w-4 h-4 text-yellow-300 mr-1"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 22 20"
    //       >
    //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //       </svg>
    //       <svg
    //         className="w-4 h-4 text-yellow-300 mr-1"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 22 20"
    //       >
    //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //       </svg>
    //       <svg
    //         className="w-4 h-4 text-yellow-300 mr-1"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 22 20"
    //       >
    //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //       </svg>
    //       <svg
    //         className="w-4 h-4 text-yellow-300 mr-1"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 22 20"
    //       >
    //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //       </svg>
    //       <svg
    //         className="w-4 h-4 text-gray-200 dark:text-gray-600"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 22 20"
    //       >
    //         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    //       </svg>
    //       <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
    //         {rating}
    //       </span>
    //     </div>
    //     <div className="flex items-center justify-between">
    //       <span className="text-3xl font-bold text-gray-900 dark:text-white">
    //         ${price}
    //       </span>
    //       <a
    //         href="#"
    //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //       >
    //         Add to cart
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDetails;
