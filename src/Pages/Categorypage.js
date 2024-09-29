// // import React, { useState } from 'react';
// // import CategorySection from '../Components/CategorySection';
// // import Footer from '../Components/Footer';
// // import Header1 from '../Components/Header/Header1';
// // import Header2 from '../Components/Header/Header2';
// // import OurProducts from '../Components/Ourproducts';
// // import Testimonials from '../Components/Testimonial';
// // import WhyOurProduct from '../Components/WhyOurProduct';


// // const Categorypage = () => {
// //     // Define state for category title
// //     const [categoryName, setCategoryName] = useState('MILLETS');

// //     // Function to handle title click in Header1
// //     const handleTitleClick = (name) => {
// //       setCategoryName(name); // Update categoryTitle based on the clicked title
// //     };
  
// //   return (
// //     <div>
// //       <Header1  onTitleClick={handleTitleClick}/>
// //       {/* <Header2/> */}
// //       <CategorySection categoryName={categoryName}/>
// //       <OurProducts categoryName={categoryName} />
// //       <WhyOurProduct/>
// //       <Testimonials/>
// //       <Footer/>
// //     </div>
// //   )
// // }

// // export default Categorypage
// import React, { useState } from 'react';
// import CategorySection from '../Components/CategorySection';
// import Footer from '../Components/Footer';
// import Header1 from '../Components/Header/Header1';
// import OurProducts from '../Components/Ourproducts';
// import Testimonials from '../Components/Testimonial';
// import WhyOurProduct from '../Components/WhyOurProduct';

// const Categorypage = () => {
//     // Define state for category name and description
//     const [categoryName, setCategoryName] = useState('MILLETS');
//     const [categoryDescription, setCategoryDescription] = useState('Essential millets that capture the flavors of Indian cuisine.');

//     // Function to handle title click in Header1
//     const handleTitleClick = (name, description) => {
//       setCategoryName(name); // Update category name based on the clicked title
//       setCategoryDescription(description); // Update description based on clicked title
//     };
  
//   return (
//     <div>
//       {/* Passing handleTitleClick to Header1 for updating category name and description */}
//       <Header1 onTitleClick={handleTitleClick}/>
      
//       {/* Passing category name and description to CategorySection */}
//       <CategorySection categoryName={categoryName} description={categoryDescription} />

//       {/* Passing categoryName to OurProducts */}
//       <OurProducts categoryName={categoryName} />

//       {/* Other sections */}
//       <WhyOurProduct/>
//       <Testimonials/>
//       <Footer/>
//     </div>
//   )
// }

// export default Categorypage;
import React, { useState } from 'react';
import CategorySection from '../Components/CategorySection';
import Footer from '../Components/Footer';
import Header1 from '../Components/Header/Header1';
import OurProducts from '../Components/Ourproducts';
import Testimonials from '../Components/Testimonial';
import WhyOurProduct from '../Components/WhyOurProduct';

const Categorypage = () => {
  // Define state for category name and description
  const [categoryName, setCategoryName] = useState('MILLETS');
  const [categoryDescription, setCategoryDescription] = useState(
    'Essential millets that capture the flavors of Indian cuisine.'
  );
 // Function to handle category click in Header1
 const handleCategoryClick = (name, description) => {
  setCategoryName(name); // Update category name based on the clicked category
  setCategoryDescription(description); // Update description based on clicked category
};

// Function to handle title click in Header1
const handleTitleClick = (name, description) => {
  setCategoryName(name); // Update category name based on the clicked title
  setCategoryDescription(description); // Update description based on clicked title
};


  return (
    <div>
      {/* Passing handleTitleClick to Header1 for updating category name and description */}
      <Header1 onTitleClick={handleTitleClick} onCategoryClick={handleCategoryClick} />

      {/* Passing category name and description to CategorySection */}
      <CategorySection categoryName={categoryName} description={categoryDescription} />

      {/* Passing categoryName to OurProducts to display relevant products */}
      <OurProducts categoryName={categoryName} />

      {/* Other sections */}
      <WhyOurProduct />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Categorypage;