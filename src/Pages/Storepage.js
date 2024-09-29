import React from 'react'
import Header1 from '../Components/Header/Header1'
import Header2 from '../Components/Header/Header2'
import ProductComponent from '../Components/ProductComponent'
import Footer from '../Components/Footer'

const Storepage = () => {
  return (
    <div>
        <Header1/>
        {/* <Header2/> */}
        <ProductComponent/> 
        <Footer/>
      
    </div>
  )
}

export default Storepage
