
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import gpay from '../asstes/gpay.png'
const CheckoutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { totalAmount } = location.state || { totalAmount: 0 };
    const userId = localStorage.getItem('userId');
    const [cartItems, setCartItems] = useState([]);
    const [notification, setNotification] = useState({ message: '' });
    const [errors, setErrors] = useState({});
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        shippingInfo: {
            address: '',
            city: '',
            state: '',
            country: '',
            zip: '',
        },
        user: userId,
        totalAmount: totalAmount,
    });
    const [loading, setLoading] = useState(true);

    const fetchCartItems = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Please log in to checkout');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/cart`, {
                headers: { Authorization: `Bearer ${token} ` },
            });
            setCartItems(response.data.cart.products);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCartItems();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (['address', 'city', 'state', 'country', 'zip'].includes(name)) {
            setBillingDetails({
                ...billingDetails,
                shippingInfo: { ...billingDetails.shippingInfo, [name]: value },
            });
        } else {
            setBillingDetails({ ...billingDetails, [name]: value });
        }
    };
    const validateInputs = () => {
        let validationErrors = {};

        // First name validation
        if (!billingDetails.firstName.trim()) {
            validationErrors.firstName = 'First name is required';
        }

        // Last name validation
        if (!billingDetails.lastName.trim()) {
            validationErrors.lastName = 'Last name is required';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!billingDetails.email.trim()) {
            validationErrors.email = 'Email is required';
        } else if (!emailPattern.test(billingDetails.email)) {
            validationErrors.email = 'Please enter a valid email';
        }

        // Phone number validation (should be 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!billingDetails.phone.trim()) {
            validationErrors.phone = 'Phone number is required';
        } else if (!phonePattern.test(billingDetails.phone)) {
            validationErrors.phone = 'Phonenumber must be 10 digits';
        }

        // Address validation
        if (!billingDetails.shippingInfo.address.trim()) {
            validationErrors.address = 'Address is required';
        }

        // City validation
        if (!billingDetails.shippingInfo.city.trim()) {
            validationErrors.city = 'City is required';
        }

        // State validation
        if (!billingDetails.shippingInfo.state.trim()) {
            validationErrors.state = 'State is required';
        }

        // Country validation
        if (!billingDetails.shippingInfo.country.trim()) {
            validationErrors.country = 'Country is required';
        }

        // Zip code validation
        if (!billingDetails.shippingInfo.zip.trim()) {
            validationErrors.zip = 'Pin code is required';
        }

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };
    const loadRazorpayScript = () => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                reject(new Error('Failed to load Razorpay script'));
            };
            document.body.appendChild(script);
        });
    };


    const handlePayment = async () => {
        const token = localStorage.getItem('authToken');
        const userId = localStorage.getItem('userId');

        if (!token || !userId) {
            alert('Please log in to place an order');
            return;
        }

        const orderData = {
            amount: totalAmount,
            user: userId,
            shippingInfo: billingDetails.shippingInfo,
            products: cartItems.map(item => ({
                productId: item.product._id,
                quantity: item.quantity,
            })),
            totalAmount: totalAmount,
        };

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/payment/process`, orderData, {
                headers: { Authorization: `Bearer ${token} ` },
            });

            const { orderId } = response.data;

            await loadRazorpayScript();

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: totalAmount * 100,
                currency: "INR",
                name: "Paarampayia",
                description: "Test Transaction",
                order_id: orderId,
                handler: async (response) => {
                    const paymentData = {
                        orderId: orderId,
                        paymentId: response.razorpay_payment_id,
                        signature: response.razorpay_signature,
                        orderData: {
                            ...billingDetails,
                            products: cartItems.map(item => ({
                                productId: item.product._id,
                                quantity: item.quantity,
                            })),
                        },
                    };

                    try {
                        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/v1/callback`, paymentData, {
                            headers: { Authorization: ` Bearer ${token}` },
                        });

                        alert('Payment successful!');

                        // Pass data to the OrderConfirmation page
                        navigate('/confirmation', {
                            state: {
                                orderId: orderId,
                                billingDetails: billingDetails,
                                cartItems: cartItems,
                                totalAmount: totalAmount
                            }
                        });
                    } catch (error) {
                        console.error('Error verifying payment:', error);
                        alert('Payment verification failed. Please try again.');
                    }
                },
                prefill: {
                    name: `${billingDetails.firstName} ${billingDetails.lastName}`,
                    email: billingDetails.email,
                    contact: billingDetails.phone,
                },
                theme: {
                    color: "#F37254",
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error('Error initiating payment:', error);
            alert('Error initiating payment. Please try again.');
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        handlePayment();

        if (validateInputs()) {
            handlePayment();
        }
    };
    const handlePlaceOrder = () => {
        // Show the notification immediately
        setNotification({ message: 'Make a payment before placing the order.' });

        // Hide the notification after 3 seconds
        setTimeout(() => {
            setNotification({ message: '' }); // Set message to an empty string to hide the notification
        }, 3000);
    };
    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    };
    const subtotal = calculateSubtotal();
    const shipping = 0; // Shipping is free
    const total = subtotal + shipping;
    const handleProceedToCheckout = () => {
        navigate('/confirmation', {
            state: {
                billingDetails: billingDetails,
                cartItems: cartItems,
                totalAmount: totalAmount,
            },
        });
    };

   

    return (

        <div className="bg-radial-white-black from-blue-900 to-black text-white px-[20px] md:px-[80px] pt-[50px]">
            {/* Progress Bar */}
            <div className="flex flex-col items-center justify-center mb-16">

                <div className="flex items-center md:w-[742px] w-full">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] rounded-full flex items-center justify-center  md:text-[50px] text-[30px]  font-semibold text-black">1</div>
                        <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Order Details</span>
                    </div>

                    {/* Dashed Line */}
                    <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border mx-4"></div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-[#ECBC56] border border-[#ECBC56] rounded-full  md:text-[50px] text-[30px]  font-semibold text-black flex items-center justify-center">2</div>
                        <span className="mt-2 text-[13px] md:text-[25px] text-[#ECBC56] font-light">Delivery & Payment</span>
                    </div>

                    {/* Dashed Line */}
                    <div className="flex-grow h-0 border-t-2 border-[#ECBC56] border-dashed mx-4"></div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-[44px] h-[44px] md:w-[84px] md:h-[84px] bg-transparent border border-[#ECBC56] rounded-full  md:text-[50px] text-[30px] text-[#ECBC56] font-semibold flex items-center justify-center">3</div>
                        <span className="mt-2 text-[13px] md:text-[25px] text-white font-light">Confirmation</span>
                    </div>
                </div>
            </div>
            {notification.message && (
                <div className="fixed top-4 right-4 bg-[#ECBC56] text-black px-4 py-2 rounded shadow-lg z-50 text-center">
                    {notification.message}
                </div>
            )}
            <div className='flex flex-col gap-[34px] md:flex-row justify-between '>
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Left Section - Billing and Delivery Details */}

                    <div className="">
                        {/* Billing Details */}
                        <div className="bg-transparent mb-6 md:w-[629px] md:h-[287px] w-full h-auto">
                            <h2 className=" text-[20px] md:text-[32px]   font-light mb-4">Billing Details</h2>
                            <div className="flex flex-wrap gap-4">

                                <input type="text" name='firstName' placeholder="First Name" className="flex-1 p-2 rounded-md bg-[#000719] text-[16px] md:text-[20px] font-light  text-white" onChange={handleInputChange} required />
                                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                                <input type="text" name='lastName' placeholder="Last Name" className="flex-1 p-2 rounded-md bg-[#000719] text-[16px] md:text-[20px] font-light  text-white" onChange={handleInputChange} required />
                                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                            </div>
                            <input type="email" name='email' placeholder="Email Address" className="p-2 rounded-md w-full bg-[#000719]  text-[16px] md:text-[20px] font-light text-white mt-4" onChange={handleInputChange} required />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                            <div className="flex items-center mt-4">
                                <div className="flex items-center gap-[10px]  bg-[#000719]  md:w-[164px] w-full p-2 rounded-md">
                                    <img src="https://cdn.countryflags.com/thumbs/india/flag-400.png" alt="India Flag" className=" pl-[10px]  h-6" />
                                    <span className=' md:text-[20px] md:text-[23px] text-[18px] font-light text-[#FFFFFF]'>IND</span>
                                </div>
                                <span className="p-2 rounded-md  bg-[#000719] text-[#FFFFFF]  text-[20px] md:text-[23px] font-light   ml-4">+91</span>

                                <input type="number" name='phone' placeholder="Phone Number" className="p-2 rounded-md w-full bg-[#000719] text-[16px] md:text-[20px] font-light  text-white ml-4" onChange={handleInputChange} required />
                                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
                            </div>
                        </div>

                        {/* Delivery Address */}
                        <div className="bg-transparent  md:w-[629px] md:h-[360px] w-full h-auto">
                            <h2 className="md:text-[32px] text-[22px] font-light mb-4">Delivery Address</h2>
                            <input type="text" name='address' placeholder="Address" className="p-2 rounded-md w-full bg-[#000719]  text-[16px] md:text-[20px] font-light  text-white mb-4" onChange={handleInputChange} required />
                            <input type="text" name='city' placeholder="City" className="p-2 rounded-md w-full bg-[#000719]  text-[16px] md:text-[20px] font-light  text-white mb-4" onChange={handleInputChange} required />
                            <div className="flex flex-wrap gap-4">
                                <input type="text" name='state' placeholder="State" className="flex-1 p-2 rounded-md bg-[#000719]  text-[16px] md:text-[20px] font-light   text-white" onChange={handleInputChange} required />
                                <input type="text" name='country' placeholder="Country" className="flex-1 p-2 rounded-md bg-[#000719]  text-[16px] md:text-[20px] font-light   text-white" onChange={handleInputChange} required />
                            </div>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <input type="text" name='city' placeholder="City/Town" className="flex-1 p-2 rounded-md bg-[#000719]  text-[16px] md:text-[20px] font-light   text-white" />
                                <input type="number" name='zip' placeholder="Pin Code" className="flex-1 p-2 rounded-md bg-[#000719]  text-[16px] md:text-[20px] font-light  text-white" onChange={handleInputChange} required />
                            </div>
                        </div>

                        {/* Payment Option */}
                        <div className="bg-transparent w-full md:w-[250px] rounded-lg mt-6 flex flex-col md:pb-[100px]">
                            <div className='w-full'>
                                <h2 className=" text-[22px] md:text-[32px]  font-light">Pay With</h2>
                            </div>


                            <button type="submit" className=' md:w-[350px] mt-6 h-[70px] w-full  bg-[#000719] p-[10px] text-[20px] font-light  text-white'>
                                <img src={gpay} alt="GPay" className=" w-full h-full" />
                            </button>

                        </div>

                    </div>
                </form>
                {/* Right Section - Order Summary */}
                <div className="mb-[20px] md:mb-[0px] bg-[#041423] border border-[#ECBC56]  p-5 md:p-9 rounded-[20px] md:w-[451px] md:h-[441px] w-full h-auto flex flex-col">
                    <div>
                        <h3 className=" text-[23px] md:text-[30px] text-[#ECBC56] font-semibold mb-4">ORDER TOTAL</h3>
                        <div className="h-[171px]">
                            <div className="flex justify-between">
                                <span className='text-[#DBDBDB]  text-[18px] md:text-[25px] font-light'>Subtotal</span>
                                <span className='text-[#DBDBDB] md:text-[25px] font-light'>₹ {subtotal}</span>
                            </div>
                            <div className="flex justify-between mb-[30px]">
                                <span className='text-[#DBDBDB]  text-[18px] md:text-[25px] font-light'>Shipping</span>
                                <span className='text-[#DBDBDB] text-[18px] md:text-[25px] font-light'>Free</span>
                            </div>
                            <hr className='my-4 border-[#ECBC56] border-dashed mb-[30px]' />
                            <div className="flex justify-between ">
                                <span className='text-[#ECBC56] text-[18px] md:text-[25px] font-light'>Total</span>
                                <span className='text-[#ECBC56] text-[18px] md:text-[25px] font-light'>₹ {total}</span>
                            </div>
                        </div>
                    </div>
                    <div className='md:mt-[40px]'>
                        <button onClick={handlePlaceOrder} className="md:py-[0px] py-[4px] md:w-[384px] md:h-[52px] w-full h-auto text-[16px] md:text-[25px] mb-[15px] bg-[#ECBC56] text-black font-normal rounded-[5px] text-center">Place order</button>


                    </div>

                </div>
            </div>

        </div>
    );
};

export default CheckoutPage;