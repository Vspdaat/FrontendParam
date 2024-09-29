import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import tick from '../asstes/tick.png'; // Static asset
import SingleImg from '../asstes/SingleImage.png';

const OrderConfirmation = () => {
   const navigate = useNavigate();
  const location = useLocation();
  const { orderId, billingDetails, cartItems, totalAmount } = location.state || {};

  const handleProductClick = () => {
    navigate('/product'); // Navigate to product page when clicking on the product card
  };

  return (
    <div className="min-h-screen bg-[#0C192F] flex flex-col items-center justify-start  px-[20px] md:px-[80px] pt-[60px]">


<div className="flex items-center justify-center mb-[70px]">
        <div className="flex items-center md:w-[742px] w-full">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">1</div>
            <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Order Details</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56]  rounded-full  flex items-center justify-center md:text-[50px] text-[30px] font-semibold text-black">2</div>
            <span className="mt-2 text-[12px] md:text-[25px] text-white font-light">Delivery & Payment</span>
          </div>
          <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56]  rounded-full  flex items-center justify-center text-[30px] md:text-[50px] font-semibold text-black">3</div>
            <span className="mt-2 text-[12px] md:text-[25px]  text-[#ECBC56] font-light">Confirmation</span>
          </div>
        </div>
      </div>
      <div className="bg-[#0A1C3A] w-full h-auto  rounded-[20px] shadow-lg px-[24px] md:px-[80px] py-[40px]">
        {/* Static Order Header */}
        <div className="flex flex-row  gap-[18px] md:flex-row justify-between md:items-center md:w-[45%]">
          <div className="flex justify-center mb-4 md:mb-0">
            <img src={tick} className="w-[60px] md:w-[130px] h-[60px] md:h-[90px]" alt="Order confirmed" />
          </div>
          <div className=" text-white mb-0 w-full">
            <p className=" flex md:flex text-[18px] md:text-[25px] font-normal">Order #{orderId || '1100'}</p>
            <h1 className="text-[24px] md:text-[40px] font-medium  ">Thank You
             {/* Thank You {billingDetails?.firstName || 'Customer'} */}
            </h1>
          </div>
        </div>

        {/* Static Order Confirmation Message */}
        <div className="bg-[#003D6426] md:px-[54px] px-[24px] py-[37px] rounded-[20px] mt-8 mb-8 h-auto ">
          <h2 className="text-[#F5B02E] text-[28px] md:text-[35px] font-medium mb-4">Your Order is Confirmed</h2>
          <p className="text-white text-[16px] md:text-[23px] font-normal">
            We have accepted your order, and we're getting it ready. A confirmation mail has been sent to{' '}
            <span className="text-[#ECBC56] text-[10px] md:text-[23px]">{billingDetails?.email || 'your-email@example.com'}</span>.
          </p>
        </div>

        {/* Flex Container for Customer & Order Details */}
        <div className="flex flex-col md:flex-row bg-[#003D6426] px-[24px]  md:px-[54px] py-[30px] h-auto  rounded-[20px] justify-between gap-6 text-[#C7D5E0]">
          {/* Customer Info */}
          <div className="w-full md:w-1/2 md:pr-8 md:border-r md:border-gray-600">
            <h3 className="text-white font-medium text-[20px] md:text-[25px] mb-8">Customer</h3>
            <div className="flex flex-col ">
              <div className="mb-6">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Email:</p>
                <p className="text-white font-medium text-[10px] md:text-[22px]">{billingDetails?.email || 'newmail@gmail.com'}</p>
              </div>
              <div className="mb-4">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Phone:</p>
                <p className="text-[16px] md:text-[20px] font-normal">{billingDetails?.phone || '8899776655'}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-[40px]">
              <div className="mb-4">
                <p className="text-white font-medium text-[18px] md:text-[22px]">Billing Address:</p>
                <p className="text-[16px] md:text-[20px] font-normal">
                  {billingDetails
                    ? `${billingDetails.firstName} ${billingDetails.lastName}, ${billingDetails.shippingInfo.address}, ${billingDetails.shippingInfo.city} - ${billingDetails.shippingInfo.zip}, ${billingDetails.shippingInfo.state}, ${billingDetails.shippingInfo.country}`
                    : 'YourName Here, 12 Street Name, City - 600001, Tamil Nadu'}
                </p>
              </div>
              <div>
                <p className="text-white font-medium text-[18px] md:text-[22px]">Shipping Address:</p>
                <p className="text-[16px] md:text-[20px] font-normal">
                  {billingDetails
                    ? `${billingDetails.firstName} ${billingDetails.lastName}, ${billingDetails.shippingInfo.address}, ${billingDetails.shippingInfo.city} - ${billingDetails.shippingInfo.zip}, ${billingDetails.shippingInfo.state}, ${billingDetails.shippingInfo.country}`
                    : 'YourName Here, 12 Street Name, City - 600001, Tamil Nadu'}
                </p>
              </div>
            </div>
          </div>

          {/* Order Info */}
          <div className="w-full md:w-1/2 md:pl-8">
            <h3 className="text-white font-medium text-[20px] md:text-[25px] mb-8">Order</h3>
            {/* Iterate over cart items, dynamically */}
            {cartItems?.length > 0
              ? cartItems.map((item, index) => (
                  <div key={index} className="mb-6">
                    <p className="text-[16px] md:text-[20px] font-normal">
                      {item.productId} - {item.quantity} x 
                    </p>
                  </div>
                ))
              : (
                  <p className="text-[16px] md:text-[20px] font-normal">Silk Pillow - Varient x 1</p>
                )}
            <div className="flex justify-between">
              <p className="text-[16px] md:text-[20px] font-normal">Subtotal</p>
              <p className="text-[16px] md:text-[20px] font-normal">₹{totalAmount || '4,999.00'}</p>
            </div>
            <div className="flex gap-[55px] md:gap-[0px]">
              <p className="text-[16px] md:text-[20px] font-normal">Payment method</p>
              <p className="text-[16px] md:text-[20px] font-normal">Online Payment</p>
            </div>
            <div className="flex justify-between font-semibold text-white mt-4">
              <p className="text-[16px] md:text-[20px] font-medium">Total</p>
              <p className="text-[16px] md:text-[20px] font-semibold">₹{totalAmount || '4,999.00'}</p>
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

export default OrderConfirmation;