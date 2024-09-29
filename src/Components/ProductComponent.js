import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import categories from '../data/categories';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ProductCard from './ProductCard';

const ProductComponent = () => {
  const navigate = useNavigate();
  const initialOpenCategoryIndices = categories.map((_, index) => index); // Initialize with all category indices
  const [openCategoryIndices, setOpenCategoryIndices] = useState(initialOpenCategoryIndices); // Start with all categories open
  const [products, setProducts] = useState([]);
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const [sortOptions, setSortOptions] = useState({});
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`);
        setProducts(response.data.products);

        const initialSortOptions = {};
        categories.forEach((category, index) => {
          initialSortOptions[index] = 'featured';
        });
        setSortOptions(initialSortOptions);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const handleSortChange = (index, value) => {
    setSortOptions((prevOptions) => ({
      ...prevOptions,
      [index]: value,
    }));
  };

  const toggleCategory = (index) => {
    if (openCategoryIndices.includes(index)) {
      setOpenCategoryIndices(openCategoryIndices.filter((i) => i !== index)); // Remove index to close category
    } else {
      setOpenCategoryIndices([...openCategoryIndices, index]); // Add index to open category
    }
  };

  const handleAddToCart = (product) => {
    setNotification(`${product.name} has been added to your cart.`);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleBuyNow = () => {
    navigate('/cart');
  };

  const handleProductClick = (product) => {
    navigate(`/product?id=${product.id}`);
  };

  return (
    <div className="cursor-pointer bg-radial-white-black from-black via-blue-900 to-gray-800 text-white w-full h-full py-6 px-4 md:px-20 mb-12">
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm md:text-base font-normal">
          Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
        </p>
      </div>

      {notification && (
        <div className="fixed top-4 right-4 bg-[#ECBC56] text-black p-2 rounded shadow-lg z-50 text-center">
          {notification}
        </div>
      )}

      {loading ? (
        <p className="text-center">Loading products...</p>
      ) : (
        categories.map((category, index) => (
          <div key={category.id} className="mb-6">
            <div
              className="bg-[#000E21] flex justify-between items-center p-3 md:p-4 rounded cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <h3 className="text-lg md:text-2xl font-bold text-[#ECBC56]">{category.categoryName}</h3>
              <span className="text-xl text-gray-600">
                {openCategoryIndices.includes(index) ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {openCategoryIndices.includes(index) && (
              <>
                <div className="w-full flex justify-end mt-4">
                  <div className="flex items-center space-x-2">
                    <label htmlFor={`sort-${index}`} className="text-sm sm:text-m">
                      Sort by
                    </label>
                    <select
                      id={`sort-${index}`}
                      className="bg-gray-800 text-white p-2 rounded w-30 md:w-36 h-10"
                      value={sortOptions[index]}
                      onChange={(e) => handleSortChange(index, e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="millets">Millets</option>
                    </select>
                  </div>
                </div>

                <div className="w-full flex overflow-x-auto space-x-4 px-4 mb-4 scrollbar-hide mt-4 snap-x snap-mandatory">
                  {products.length > 0 ? (
                    products
                      .filter((product) => product.categoryId === category.id)
                      .sort((a, b) => {
                        if (sortOptions[index] === 'millets') {
                          return a.name.localeCompare(b.name);
                        }
                        return 0;
                      })
                      .map((product) => (
                        <div
                          className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%] snap-start"
                          key={product._id}
                        >
                          <ProductCard
                            product={product}
                            selectedQuantity={quantities[product._id] || 1}
                            handleQuantityChange={handleQuantityChange}
                          />
                        </div>
                      ))
                  ) : (
                    <p>No products available</p>
                  )}
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default ProductComponent;
