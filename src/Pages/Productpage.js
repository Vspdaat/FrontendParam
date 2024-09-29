import React from 'react'
import Footer from '../Components/Footer';
import Header1 from '../Components/Header/Header1';
import Header2 from '../Components/Header/Header2';
import HighlightedFeatures from '../Components/HighlightedFeatures';
import ProductDetail from '../Components/ProductDetail';
import Reviews from '../Components/Reviews';
import StarRecipe from '../Components/steps';
import { features } from '../data/FeaturesData';
import { steps } from '../data/stepData';
import { otherRecipes } from '../data/recipesData';
import Banner from '../Components/Banner';

const Productpage = () => {
  return (
    <div>
      <Header1/>
      {/* <Header2/> */}
      <ProductDetail/>
      <HighlightedFeatures features={features} />
      <StarRecipe steps={steps}  />
      <Banner/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Productpage
