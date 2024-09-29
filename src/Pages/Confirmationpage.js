import React from 'react'
import OrderConfirmation from '../Components/OrderConfirmation'
import confirmationData from '../data/ConfirmationData'
import Header1 from '../Components/Header/Header1'
import Header2 from '../Components/Header/Header2'
import Footer from '../Components/Footer'

const Confirmationpage = () => {
  return (
    <div>
        <Header1/>
        {/* <Header2/> */}
       <OrderConfirmation data={confirmationData}/>
       <Footer/>
    </div>
  )
}

export default Confirmationpage
