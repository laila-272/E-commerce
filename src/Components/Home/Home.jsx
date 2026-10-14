import React from 'react'
import Categories from './Categories.jsx'
import ProductsGrid from './ProductsGrid.jsx'
import BrandStorySection from './BrandStorySection.jsx';
import CollectionBanner from './CollectionBanner';
import FeaturedProducts from './FeaturedProducts.jsx';
import Hero from './Hero.jsx';
import CardsSection from './Cards.jsx';
import TestimonialsSection from './Testimonials.jsx';
export default function Home() {
  return (
    <div>
      <Hero/>
      <Categories/>
      <BrandStorySection/>
      <FeaturedProducts/>
      <CollectionBanner/>
      <CardsSection/>
      <TestimonialsSection/>
    </div>
  )
}
