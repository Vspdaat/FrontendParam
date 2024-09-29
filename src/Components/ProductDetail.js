import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductDetail = () => {
  // State to store product data
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity
  const [notification, setNotification] = useState(null); // Notification state

  const navigate = useNavigate();
  const handleBuyNowClick = (e) => {
    e.stopPropagation(); // Prevent the card click from firing
    navigate('/cart'); // Navigate to Cartpage
  };
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/products`);
        // Assuming you're fetching multiple products, select the first one (or use a specific product ID)
        setProduct(response.data.products[0]); 
        setLoading(false);
      } catch (err) {
        setError('Failed to load product data');
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  const handleAddToCart = async () => {
    const token = localStorage.getItem('authToken');
  
    if (!token) {
      alert('You need to be logged in to add items to the cart.');
      return;
    }
  
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
        productId: product._id,
        quantity: selectedQuantity,
      }, {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the headers
        },
      });
  
      setNotification(`${product.name} has been added to your cart.`);
      setTimeout(() => {
        setNotification(null); // Hide the notification after 3 seconds
      }, 3000);
    } catch (error) {
      console.error('Failed to add product to cart:', error.response?.data || error);
      alert('Could not add product to cart. Please try again.');
    }
  };

  // Handle quantity change
  const handleQuantityChange = (event) => {
    setSelectedQuantity(event.target.value);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product found</p>;
  }

  return (
    <div className="bg-[#0a1a2a] py-10 px-[20px] md:px-[80px] relative">
      {notification && (
        <div className="fixed top-4 right-4 bg-[#ECBC56] text-black px-4 py-2 rounded shadow-lg z-50 text-center">
          {notification}
        </div>
      )}
      <div className=" ">
        <h2 className="text-center text-white text-2xl md:text-3xl font-semibold mb-2">
          {product.category} Category
        </h2>
        <div className="mx-auto border-dashed border-t-[1px] border-[#ECBC56] w-[230px] md:w-[441px] mb-[20px] mt-[20px]"></div>
        <p className="text-center text-white text-sm md:text-base mb-8">
          Finest collection of {product.category} products, spices, and more delivered straight to your door.
        </p>

        <div className="rounded-lg flex flex-col md:flex-row md:items-start md:gap-[60px] md:max-h-[687px] mt-[60px]">
          {/* Image Section */}
          <div className="md:mt-[0px]">
            <img
              src={product.images[0].url} // Use the first product image
              alt={product.name}
              className="rounded-lg w-full md:w-[614px] md:h-[423px] object-cover"
            />

            {/* Four Small Images Section */}
             <div className="flex justify-between items-center mt-6 space-x-4 overflow-x-scroll md:overflow-visible md:space-x-4 scrollbar-hide">
              <img
                 src={product.images[0].url} // Use the first product image
                 alt={product.name}
                className="w-[142px] h-[65px] rounded-[10px] object-cover"
              />
              <img
                 src={product.images[0].url} // Use the first product image
                 alt={product.name}
                className="w-[142px] h-[65px] rounded-[10px] object-cover"
              />
              <img
                 src={product.images[0].url} // Use the first product image
                 alt={product.name}
                className="w-[142px] h-[65px] rounded-[10px] object-cover"
              />
              <img
                 src={product.images[0].url} // Use the first product image
                 alt={product.name}
                className="w-[142px] h-[65px] rounded-[10px] object-cover"
              />
            </div>
          </div>

          {/* Product Info Section */}
          <div className="w-full md:w-[626px] flex flex-col gap-4 md:gap-[30px] mt-8 md:mt-0">
            <h1 className="text-[#ECBC56] text-3xl md:text-5xl font-bold leading-none md:leading-[1] md:w-[469px]">
              {product.name}
            </h1>

            {/* Rating Section */}
            <div className="flex items-center gap-[10px]">
              <div className="bg-[#ECBC56] text-[#000E21] font-bold px-2 py-1 h-[34px] rounded mr-2">
                {product.ratings} ★
              </div>
              <p className="text-gray-400 text-lg">{product.numOfReviews} Ratings</p>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="flex flex-row md:flex-row  items-center">
              <label className="w-full md:w-[230px] h-[49px] bg-[#111B2D] text-[14px] md:text-[16px] md:text-xl text-gray-100 font-semibold rounded-l-lg p-[10px] flex items-center justify-center" htmlFor="quantity">
                Select Quantity
              </label>
              <select
                id="quantity"
                value={selectedQuantity}
                onChange={handleQuantityChange} // Update quantity on change
                className=" md:w-[176px] h-[49px] bg-[#00071A] text-xl text-gray-100 border-none rounded-[7px] w-[75%] p-[10px_30px] flex items-center"
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="flex  md:items-center gap-[15px] flex-row md:flex-row justify-between w-full md:w-[412px] text-xl  md:space-y-0">
              <button className="md:text-[24px] font-normal text-[15px] w-full md:w-[196px] h-[49px] bg-[#424242] text-white-800 border border-gray-500 rounded-[5px] px-[20px] py-[10px] font-semibold hover:bg-gray-400 transition duration-200" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button onClick={handleBuyNowClick} className=" text-[15px] md:text-[24px] font-normal w-full md:w-[196px] h-[49px] bg-white text-black rounded-[5px] px-[20px] py-[10px] font-semibold hover:bg-gray-100 transition duration-200">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
