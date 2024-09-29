
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SingleImg from '../asstes/SingleImage.png'; // Make sure the path is correct

const CartPage = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCartItems = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Please log in to view your cart');
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setCartItems(response.data.cart.products);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems(); // Fetch cart items on mount
    }, []);
console.log(cartItems);
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    };

    const subtotal = calculateSubtotal();
    const shipping = 0; // Shipping is free
    const total = subtotal + shipping;
    console.log(total);
    const handleUpdateQuantity = async (productId, newQuantity) => {
        if (newQuantity < 0) return; // Prevent negative quantities
        const token = localStorage.getItem('authToken');

        try {
            await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${productId}`, { quantity: newQuantity }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            fetchCartItems(); // Refresh cart items after update
        } catch (error) {
            console.error('Error updating cart quantity:', error);
        }
    };

    const handleRemoveProduct = async (productId, currentQuantity) => {
      const token = localStorage.getItem('authToken'); // Get token inside the function
  
      if (currentQuantity > 1) {
          // If the quantity is greater than 1, reduce it by 1
          try {
              await axios.put(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${productId}`, 
              { quantity: currentQuantity - 1 }, 
              {
                  headers: { Authorization: `Bearer ${token}` },
              });
              // Refresh cart items after update
              fetchCartItems();
          } catch (error) {
              console.error('Error updating cart quantity:', error);
          }
      } else {
          // If the quantity is 1, remove the product from the cart
          try {
              await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${productId}`, {
                  headers: { Authorization: `Bearer ${token}` },
              });
              // Refresh cart items after removal
              fetchCartItems();
          } catch (error) {
              console.error('Failed to remove product:', error);
          }
      }
  };
  
  // const handleRemoveProduct = async (productId) => {
  //   const token = localStorage.getItem('authToken'); // Get token inside the function
  //   try {
  //     await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart/${productId}`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     // Optionally refresh cart items here
  //     fetchCartItems(); // Refresh cart items after removal
  //   } catch (error) {
  //     console.error('Failed to remove product:', error);
  //   }
  // };
  const handleProceedToCheckout = () => {
    navigate('/billing', { state: { totalAmount: total } }); // Pass the total amount to the checkout page
  };
  const handleProductClick = () => {
    navigate('/product'); // Navigate to product page when clicking on the product card
  };
  
  return (
    <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
      {/* Header Progress Bar */}
      <div className="flex items-center justify-center mb-16">
        <div className="flex items-center md:w-[742px] w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      <div>
        <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
        <div className=" flex flex-col md:justify-between md:flex-row lg:space-x-4">
          {/* Product List */}
          <div className="flex-1">
            {loading ? (
              <p>Loading cart...</p>
            ) : cartItems.length === 0 ? (
              <p>No items in the cart</p>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.product._id} 
                  className="px-2 py-2 md:px-8 md:py-8 md:w-[700px] md:h-[231px] bg-[#041423] rounded-[20px] mb-6  w-full h-auto flex flex-col md:flex-row  items-start md:items-center "
                  // Navigate to product page on card click
                >
                  <img 
                    src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
                    alt={item.product.name}
                    className="mb-[10px] md:mb-[0px] md:w-[157px] md:h-[191px]  w-full h-auto object-cover md:mr-[38px]"
                  />
                  <div className="pl-2 flex flex-col w-full">
                    <h3 className="md:text-[32px] text-[30px] font-semibold ">{item.product.name}</h3>
                    <p className="text-[16px] font-normal text-[#FFFFFF] ">
                      {item.product.description || "Discover the rich flavor of millets from the heart of India."}
                    </p>
                    <div>
                 </div>
                 <div className='flex flex-row justify-between gap-'>
                    <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
                    <p className="mt-2 text-lg">Quantity: {item.quantity}</p>
                    </div>
                    {/* Action Buttons */}
                    <div className="w-full flex flex-col sm:flex-row gap-6 mt-4 pb-4">
                      <button 
                        className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
                        onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
                      >
                        UpdateQuantity
                      </button>
                      <button 
                        className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent the click from bubbling up to the card
                            handleRemoveProduct(item.product._id, item.quantity); // Call remove function
                        }}
                      >
                        Remove
                      </button>
                    </div>

                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className=" bg-[#041423] border border-[#ECBC56] md:p-9 p-5 rounded-[20px] md:w-[451px] md:h-[450px] w-full h-auto flex flex-col">
            <div>
              <h3 className=" text-[23px] md:text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
              <div className="h-[171px]">
                <div className="flex justify-between">
                  <span className='text-[#DBDBDB] text-[18px] md:text-[25px] font-light'>Subtotal</span>
                  <span className='text-[#DBDBDB]  text-[18px] md:text-[25px] font-light'>₹ {subtotal}</span>
                </div>
                <div className="flex justify-between mb-[30px]">
                  <span className='text-[#DBDBDB] text-[18px] md:text-[25px] font-light'>Shipping</span>
                  <span className='text-[#DBDBDB]  text-[18px] md:text-[25px] font-light'>Free</span>
                </div>
                <hr className='my-4 border-[#ECBC56] border-dashed mb-[30px]' />
                <div className="flex justify-between ">
                  <span className='text-[#ECBC56] text-[18px] md:text-[25px] font-light'>Total</span>
                  <span className='text-[#ECBC56]  text-[18px] md:text-[25px] font-light'>₹ {total}</span>
                </div>
              </div>
            </div>
            <div className='mt-[10px] md:mt-[40px]'>
            <button   onClick={handleProceedToCheckout}  className="md:w-[384px] md:h-[52px] w-full h-auto  text-[18px] md:text-[25px] mb-[15px] bg-[#ECBC56] text-black font-normal rounded-[5px] py-[4px] md:py-[0px] text-center">Checkout</button>
            <button 
                onClick={() => navigate('/store')} // Navigate to store page
                className="md:w-[384px] md:h-[52px] w-full h-auto text-[18px] md:text-[25px] bg-transparent border font-normal rounded-[5px] text-center py-[2px] md:py-[0px]"
              >
                Continue Shopping
              </button>


            </div>
           
          </div>
        </div>
      </div>
      {/* Buy Again Section */}
      <div className="mt-12 mb-12"> {/* Added padding on the x-axis */}
  <div className="text-center mb-12 relative">
    <h1 className="text-[28px] md:text-[40px] font-semibold mb-[20px]">Popular</h1>
    <div className="relative flex justify-center items-center">
      <div className="border-dashed border-t-2 border-[#ECBC56] w-[230px] md:w-[500px] mb-[20px]"></div>
    </div>
    <p className="text-white md:text-[16px] text-[12px] font-normal md:mb-[80px] mb-[50px]">
      Explore the essential millets that capture the authentic flavors of Indian cuisine in every dish
    </p>
  </div>

  <div className="w-full flex flex-col md:flex-row md:flex-wrap justify-center gap-[20px]">
    {[1, 2, 3, 4].map((item, index) => (
      <div
        key={index}
        className="bg-[#000719] py-[20px] md:py-[10px] pl-[10px] md:pl-[30px] pr-[10px] rounded-[20px] shadow-lg flex flex-col md:flex-row items-center h-auto w-full md:w-[48%] md:h-[250px]" // Adjusted width for two columns
        onClick={handleProductClick} // Navigate to product page on card click
      >
        <img src={SingleImg} alt="Product" className="w-full md:w-[164px] md:h-[219px] h-auto object-cover rounded-lg mr-[0px] md:mr-[38px]" />
        <div className="flex-1">
          <h3 className="text-[16px] text-[#ECBC56] font-medium uppercase">PARAMPARIYAA</h3>
          <h2 className="text-[28px] md:text-[40px] font-semibold mb-3">Kodo Millet</h2>
          <p className="text-gray-300 text-[16px] md:w-[283px] w-full font-medium mb-4">Discover the rich flavor of millet from the heart of India.</p>
          <div className="flex flex-row md:flex-row gap-[10px]">
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from bubbling up to the card
                navigate('/category'); // Navigate to category page
              }}
              className="bg-white w-full md:h-[39px] text-[#041423] font-normal py-[6px] px-[20px] md:py-[0px] rounded-[5px] text-[13px]"
            >
              Explore
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the click from bubbling up to the card
                navigate('/store'); // Navigate to cart page
              }}
              className="bg-[#041423] text-white w-full md:h-[39px] text-[#041423] font-normal py-[6px] px-[20px] md:py-[0px] rounded-[5px] text-[13px]"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    
    </div>

  );
};

export default CartPage;



// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import SingleImg from '../asstes/SingleImage.png'; // Ensure path is correct

// const CartPage = () => {
//     const navigate = useNavigate();
//     const [cartProducts, setCartProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const fetchCartItems = async () => {
//         const token = localStorage.getItem('authToken');
//         if (!token) {
//             alert('Please log in to view your cart');
//             return;
//         }

//         try {
//             const response = await axios.get('http://localhost:4000/api/v1/cart', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             setCartProducts(response.data.cart.products); // Access products directly from cart
//         } catch (error) {
//             console.error('Error fetching cart items:', error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchCartItems(); // Fetch cart items on mount
//     }, []);

//     const calculateSubtotal = () => {
//         return cartProducts.reduce((total, item) => {
//             return total + item.product.price * item.quantity;
//         }, 0);
//     };

//     const subtotal = calculateSubtotal();
//     const shipping = 0; // Shipping is free
//     const total = subtotal + shipping;

//     const handleUpdateQuantity = async (productId, newQuantity) => {
//         if (newQuantity < 0) return; // Prevent negative quantities
//         const token = localStorage.getItem('authToken');

//         try {
//             await axios.put(`http://localhost:4000/api/v1/cart/${productId}`, { quantity: newQuantity }, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             fetchCartItems(); // Refresh cart items after update
//         } catch (error) {
//             console.error('Error updating cart quantity:', error);
//         }
//     };

//     const handleRemoveProduct = async (productId) => {
//         const token = localStorage.getItem('authToken');
//         try {
//             await axios.delete(`http://localhost:4000/api/v1/cart/${productId}`, {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             fetchCartItems(); // Refresh cart items after removal
//         } catch (error) {
//             console.error('Failed to remove product:', error);
//         }
//     };

//     const handleProceedToCheckout = () => {
//         navigate('/billing', { state: { totalAmount: total } }); // Pass the total amount to the checkout page
//     };

//     return (
//         <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[60px]">
//             {/* Header Progress Bar */}
//             <div className="flex items-center justify-center mb-16">
//                 <div className="flex items-center md:w-[742px] w-full">
//                     {/* Step 1 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-medium">Order Details</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//                     {/* Step 2 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">2</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-[#DBDBDB] font-light">Delivery & Payment</span>
//                     </div>
//                     <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
//                     {/* Step 3 */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
//                         <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Cart Content */}
//             <div>
//                 <h2 className="md:text-[50px] text-[40px] font-small mb-6 text-center md:text-left">My Cart</h2>
//                 <div className="flex flex-col lg:flex-row lg:space-x-4">
//                     {/* Product List */}
//                     <div className="flex-1">
//                         {loading ? (
//                             <p>Loading cart...</p>
//                         ) : cartProducts.length === 0 ? (
//                             <p>No items in the cart</p>
//                         ) : (
//                             cartProducts.map((item) => (
//                                 <div 
//                                     key={item.product._id} 
//                                     className="bg-[#041423] rounded-[20px] py-[10px] pr-[10px] md:pl-[30px] pl-[10px] mb-6 md:w-[799px] md:h-[211px] w-full h-auto flex flex-col sm:flex-row items-center sm:items-start"
//                                     // Navigate to product page on card click
//                                 >
//                                     <img 
//                                         src={item.product.images[0]?.url || SingleImg} // Use a fallback image if none is available
//                                         alt={item.product.name}
//                                         className="md:w-[157px] md:h-[191px] w-full h-auto object-cover md:mr-[38px]"
//                                     />
//                                     <div className="flex flex-col">
//                                         <h3 className="md:text-[40px] text-[30px] font-semibold mb-[15px]">{item.product.name}</h3>
//                                         <p className="text-[16px] font-normal text-[#FFFFFF] mb-[25px]">
//                                             {item.product.description || "Discover the rich flavor of millets from the heart of India."}
//                                         </p>
//                                         <p className="mt-2 text-lg sm:text-2xl text-[#ECBC56] text-[24px] font-medium">₹{item.product.price}</p>
//                                         <p className="mt-2 text-lg">Quantity: {item.quantity}</p>

//                                         {/* Action Buttons */}
//                                         <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//                                             <button 
//                                                 className="bg-gray-800 text-white p-2 rounded-[5px] w-full" 
//                                                 onClick={() => handleUpdateQuantity(item.product._id, item.quantity + 1)}
//                                             >
//                                                 Update Quantity
//                                             </button>
//                                             <button 
//                                                 className="bg-white text-[#041423] p-2 rounded-[5px] w-full"
//                                                 onClick={(e) => {
//                                                     e.stopPropagation(); // Prevent the click from bubbling up to the card
//                                                     handleRemoveProduct(item.product._id); // Call remove function
//                                                 }}
//                                             >
//                                                 Remove
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))
//                         )}
//                     </div>

//                     {/* Order Summary */}
//                     <div className="bg-[#041423] border border-[#ECBC56] p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
//                         <div>
//                             <h3 className="text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
//                             <div className="h-[171px]">
//                                 <div className="flex justify-between">
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Subtotal</span>
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>₹ {subtotal}</span>
//                                 </div>
//                                 <div className="flex justify-between mb-[30px]">
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Shipping</span>
//                                     <span className='text-[#DBDBDB] text-[25px] font-light'>Free</span>
//                                 </div>
//                                 <hr className='border-[#ECBC56]' />
//                                 <div className="flex justify-between mt-4">
//                                     <span className='text-[#ECBC56] text-[25px] font-medium'>Total</span>
//                                     <span className='text-[#ECBC56] text-[25px] font-medium'>₹ {total}</span>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="w-full mt-[60px]">
//                             <button 
//                                 className="bg-[#ECBC56] text-[#041423] w-full rounded-[15px] py-4 font-medium text-[30px]"
//                                 onClick={handleProceedToCheckout} // Checkout button
//                             >
//                                 CHECKOUT
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CartPage;
