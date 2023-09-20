import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  const {id, thumbnail, title, price } = product;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-8 pt-10 h-[300px]">
        <img src={thumbnail} alt={title} className="rounded-xl" />
      </figure>
      <div className="card-body px-8">
        <h2 className="card-title">{title}</h2>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">${price}</h1>
          <Link to={`/products/${id}`}>
          <button className="btn btn-active btn-neutral">view more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
