import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";



const Products = () => {
    const {products} = useLoaderData()
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                products?.map(product => <ProductsCard product={product} key={product.id}></ProductsCard>)
            }
        </div>
    );
};

export default Products;