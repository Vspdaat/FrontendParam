import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; 
import { useLocation } from 'react-router-dom';
const OurProducts = () => {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({}); // State to store selected quantities for each product
  const location = useLocation();
  const { categoryName} = location.state || {};
  // Function to handle quantity change
  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  // Fetch products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`);
        setProducts(response.data.products); 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-radial-white-black justify-center text-white py-12 px-[20px] md:px-[80px]">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h1 className=" font-semibold mb-2 text-[23px] md:text-[40px] md:pt-[50px]">Choose Our Products from  {categoryName || "Millets"}</h1>
          <div className='mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px]'></div>
          <p className="text-gray-400 text-[16px] font-normal">
            Explore the essential {categoryName}  that capture the authentic flavors of Indian cuisine in every dish
          </p>
        </div>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="mx-auto w-full  h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  selectedQuantity={quantities[product._id] || 1} // Pass selected quantity
                  handleQuantityChange={handleQuantityChange} // Pass the handler
                />
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProducts;
