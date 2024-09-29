import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingCart, FiUser, FiHome, FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";  // For making API requests
import Logo from '../../asstes/parammoblogo.png';
import lgLogo from '../../asstes/logo.png';
import param from '../../asstes/paramname.png';

const navItems = [
  {
    name: "MILLETS",
    titles: [
      "Pearl Millet",
      "Foxtail Millet",
      "Barnyard Millet",
      "Kodo Millet",
      "Little Millet",
      "Sorghum",
      "Finger Millet",
      "Proso Millet",
    ],
    description: "Millets are ancient grains, packed with nutrients and ideal for traditional Indian dishes.",
  },
  {
    name: "NUTRI BITES",
    titles: ["Energy Bars", "Granola Mixes", "Fruit Snacks", "Protein Balls"],
    description: "Nutri bites that provide instant energy and balanced nutrition for your active lifestyle.",
  },
  {
    name: "MILK MIXES",
    titles: ["Almond Milk Mix", "Oat Milk Mix", "Cashew Milk Mix"],
    description: "Delicious and nutritious milk mixes, perfect for a healthy and refreshing drink.",
  },
  {
    name: "IDLY PODIES",
    titles: ["Chutney Powder", "Idly Chutney Mix", "Spicy Podies"],
    description: "Flavor-packed chutneys and spice mixes, ideal companions for traditional South Indian idly.",
  },
  {
    name: "SPICES",
    titles: ["Turmeric", "Cumin", "Coriander", "Red Chilli"],
    description: "Spices that bring the authentic flavors of Indian cuisine to your kitchen.",
  },
  {
    name: "SKIN AND HAIRCARE",
    titles: ["Aloe Vera Gel", "Coconut Oil", "Herbal Hair Oil"],
    description: "Natural skin and hair care products that rejuvenate and nourish.",
  },
  {
    name: "CONTACT US",
    titles: [],
    // description: "Reach out to us for any queries or assistance.",
  },
];

const Header1 = ({ onTitleClick }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false); // Dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  // Fetch email from localStorage when the component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);
  console.log(process.env.REACT_APP_BACKEND_URL);
  // Handle logout
  const handleLogout = async () => {
    try {
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/v1/logout`); // Adjust your backend URL if needed
      localStorage.removeItem('email');
      localStorage.removeItem('userId');
      setEmail(null);
      setShowDropdown(false);
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  // Handler for category click
  const handleCategoryClick = (name, description) => {
    navigate(`/category`, { state: { categoryName: name, description: description } }); // Navigate to the category page with the name in the URL
  };

  // Handler for title click
  // const handleTitleClick = (name, title) => {
  //   navigate(/category); // Navigate to category with specific title
  // };
  const handleTitleClick = (name, title, description) => {
    navigate(`/category`, { state: { categoryName: name, description: description } });
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
    setTimeout(() => {
      setHoveredItem(null);
    }, 10000);  // Delay to hide the dropdown after 10 seconds
  };

  const dropdownStyles = {
    transition: 'opacity 10000ms ease-in-out, transform 10000ms ease-in-out',
    opacity: isDropdownVisible ? 1 : 0,
    transform: isDropdownVisible ? 'scale(1)' : 'scale(0.95)',
  };
  return (
    <header className="fixed top-0 left-0 w-full z-50 " >
      {/* Top Header Section */}
      <div className="bg-[#000E21] text-white px-[20px] md:px-[80px]">
        <div className="w-full md:h-[98px] h-[80px]  flex flex-col md:flex-row justify-between items-center">
          {/* Mobile View: Logo and Title */}
          <div onClick={() => navigate('/')} className="flex flex-row items-center mb-2 md:hidden ">
            <img src={Logo} alt="Logo" className="h-10 w-full " />
            {/* <img src={param} alt="Param Name" className="md:h-[16px] md:w-[213px] h-[10px] w-[125px] mb-1" /> */}
          </div>

          {/* Left - Store on larger screens */}
          <div onClick={() => navigate('/store')} className="hidden sm:flex items-center justify-start flex-grow cursor-pointer">
            <FiHome className="h-5 w-5 mr-1 " />
            <span className="font-medium text-white">Store</span>
          </div>

          {/* Center - Logo and Title on larger screens */}
          <div onClick={() => navigate('/')} className="hidden sm:flex flex-row items-center justify-center flex-grow-0 mx-auto">
            <img src={lgLogo} alt="Logo" className="h-8 w-8 mb-1 sm:mr-2" />
            <img src={param} alt="Param Name" className="md:h-[16px] md:w-[213px] h-[10px] w-[125px] mb-1" />
          </div>

          {/* Right - Icons */}
          <div className="hidden sm:flex items-center justify-end flex-grow space-x-4 sm:space-x-6">
            <FiSearch className="h-5 w-5 sm:h-6 sm:w-6" />
            <FiShoppingCart onClick={() => navigate('/cart')} className="h-5 w-5 sm:h-6 sm:w-6 cursor-pointer" />
            <div className="relative">
              <FiUser
                className="h-[17px] w-[17px] md:h-[30px] md:w-[30px] cursor-pointer"
                onClick={() => {
                  if (email) {
                    setShowDropdown(!showDropdown);
                  } else {
                    navigate('/login');
                  }
                }}
              />
              {/* {email && <span className="absolute top-[35px] left-0 text-xs">{email}</span>} */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-[#ECBC56] text-black rounded shadow-lg z-10">
                  <ul className="flex justify-center items-center">
                    <li
                      className="h-[25px] w-full px-4 text-sm  cursor-pointer flex justify-center items-center"
                      onClick={handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>

              )}
            </div>
          </div>

      

          <div className="flex flex-row items-center justify-between pb-[15px]  w-full md:hidden">
            {/* Left side - Store (Vertically Centered) */}
            <div className="flex items-center">
              <FiHome onClick={() => navigate('/store')} className="h-5 w-5 mr-1" />
              <span className="">Store</span>
            </div>

            {/* Right side - Icons (All Centered Vertically) */}
            <div className="flex items-center space-x-4">
              <FiShoppingCart onClick={() => navigate('/cart')} className="h-5 w-5 cursor-pointer" />

              <FiUser
                className="h-5 w-5  cursor-pointer"
                onClick={() => {
                  if (email) {
                    setShowDropdown(!showDropdown);
                  } else {
                    navigate('/login');
                  }
                }}
              />

              <FiMenu className="h-5 w-5 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)} />
            </div>

            {/* Dropdown for Logout */}
            {showDropdown && (
              <div className="absolute right-0 mt-16 w-[30%] h-[25px] bg-[#ECBC56] text-black rounded text-center shadow-lg z-40">
                <ul>
                  <li className="text-sm hover:bg-gray-200 cursor-pointer flex text-center justify-center items-center text-center" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Navigation Header */}
      <div className="relative" onMouseLeave={() => setHoveredItem(null)}>
        <nav className="bg-[#000719] text-white text-xl px-4 py-[4px] md:py-[8px] md:px-[213px] relative z-20">
          <div className="container mx-auto">
            <ul className="hidden md:flex gap-8 text-[10px] md:text-[16px] whitespace-nowrap justify-center">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
          
                  <span className="hover:text-[#ECBC56] cursor-pointer mb-2 transition-all duration-1000 ease-in-out"
                    onClick={() => handleCategoryClick(item.name, item.description)}>
                    {item.name}
                  </span>

        
                  {hoveredItem === item.name && (
                    <div className="bg-[#000719] text-3xl rounded-lg shadow-lg mt-2 z-10 md:text-xl py-4"
                      style={{ ...dropdownStyles, width: "100%" }}>
                      <div className="container mx-auto">
                        <ul className="flex flex-col text-white text-sm">
                          {item.titles.length > 0 ? (
                            item.titles.map((title, titleIndex) => (
                              <li
                                key={titleIndex}
                                className="mb-2 hover:text-yellow-500 cursor-pointer"
                                onClick={() => handleTitleClick(item.name, title, item.description)}
                              >
                                {title}
                              </li>
                            ))
                          ) : (
                            <li className="text-gray-400">No items available</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className=" absolute bg-[#000719] text-white w-full flex flex-col z-30 sm:hidden">
            {navItems.map((item, index) => (
              <div className="py-2" key={index}>
                <span
                  className="px-4   hover:bg-gray-600 cursor-pointer"
                  onClick={() => setHoveredItem(hoveredItem === item.name ? null : item.name)}
                >
                  {item.name}
                </span>
                {hoveredItem === item.name && (
                  <div className="bg-[#000719] p-6">
                    {item.titles.length > 0 ? (
                      item.titles.map((title, titleIndex) => (
                        <span
                          key={titleIndex}
                          className="block py-1 hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleTitleClick(item.name, title, item.description)}// Update title on click
                        >
                          {title}
                        </span>
                      ))
                    ) : (
                      <span className="block py-1 text-gray-400">No items available</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header1;