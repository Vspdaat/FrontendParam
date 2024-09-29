import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product, selectedQuantity, handleQuantityChange, onAddToCart }) => {
  const imageUrl = product.images && product.images.length > 0 ? product.images[0]?.url : '/path/to/fallback-image.jpg';
  const [notification, setNotification] = useState(null); 
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler for Explore button
  const handleProductClick = (e) => {
    e.stopPropagation(); // Prevent the card click from firing
    navigate('/product'); // Navigate to Productpage
  };

  // Handler for BuyNow button
  const handleBuyNowClick = (e) => {
    e.stopPropagation(); // Prevent the card click from firing
    navigate('/cart'); // Navigate to Cartpage
  };

 
  // const handleAddToCart = async (e) => {
  //   e.stopPropagation(); 

  //   const token = localStorage.getItem('authToken');
  //   console.log('Token before adding to cart:', token); // Log the token for debugging

  //   if (!token) {
  //     alert('You need to be logged in to add items to the cart.');
  //     return;
  //   }

  //   try {
  //     // Log the productId and selectedQuantity for debugging
  //     console.log('Product ID:', product._id);
  //     console.log('Selected Quantity:', selectedQuantity);

  //     await axios.post('http://localhost:4000/api/v1/cart', {
  //       productId: product._id, // Use product._id consistently
  //       quantity: selectedQuantity, // Ensure selectedQuantity is being passed
  //     }, {
  //       headers: {
  //         Authorization: `Bearer ${token}`, // Include the token in the headers
  //       },
  //     });
  //     alert('Product added to cart!');
  //     onAddToCart(); // Call to refresh the cart items
  //   } catch (error) {
  //     console.error('Failed to add product to cart:', error.response?.data || error);
  //     alert('Could not add product to cart. Please try again.');
  //   }
  // };
  const handleAddToCart = async (e) => {
    e.stopPropagation();
  
    const token = localStorage.getItem('authToken');
 // Log the token for debugging
  
    if (!token) {
      alert('You need to be logged in to add items to the cart.');
      return;
    }
  
    try {
      console.log('Product ID:', product._id);
      console.log('Selected Quantity:', selectedQuantity);
      console.log('Token before adding to cart:', token);
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
      onAddToCart(); // Call to refresh the cart items
    } catch (error) {
      console.error('Failed to add product to cart:', error.response?.data || error);
  
    }
  };
 
  return (
    <div 
      className=" md:w-[355px] h-auto w-full md:h-[500px] bg-[rgba(0,61,100,0.15)] rounded-[10px] shadow-lg cursor-pointer"
 
    >
        {notification && (
        <div className="fixed top-4 right-4 bg-[#ECBC56] text-black px-4 py-2 rounded shadow-lg z-50 text-center">
          {notification}
        </div>
      )}
      <div onClick={handleProductClick }> 
      <img
        src={imageUrl}
        alt={product.name}
        className="md:w-[355px] md:h-[250px] object-cover mb-4 rounded-[20px]"
      />
      <div className='px-[20px]'>
      <h4 className="text-[24px] font-medium">{product.name}</h4>
      <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{product.price}</p></div>
      </div>
      {/* Quantity Selector */}
      <div className="mt-4 px-[20px]">
        <div className="w-full flex flex-row gap-2 md:pt-[10px] md:pb-[10px]">
          {[1, 2, 3].map((quantity) => (
            <button
              key={quantity}
              className={`md:w-[74px] h-auto w-full md:h-[39px] flex-grow p-1 md:p-2 rounded-[10px] bg-gray-800 text-gray-400 border-2
                ${selectedQuantity === quantity ? 'bg-blue-600 text-white border-[#ECBC56]' : 'border-transparent'}`}
              onClick={() => handleQuantityChange(product._id, quantity)} // Ensure using product._id
            >
              {quantity}
            </button>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full font-bold flex flex-row sm:flex-row gap-2 mt-4 px-[20px] pb-[20px]">
        <button className=" text-[15px] w-full h-auto  bg-gray-800 text-white p-2 md:px-[20px] md:py-[10px]  md:w-[151px] md:h-[39px] rounded-[5px] w-full" onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleBuyNowClick} className="bg-white text-[#041423] text-[15px] w-full h-auto md:w-[151px] md:h-[39px] p-2 rounded-[5px] w-full">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;

