import Header from '@/Components/Frontend_Components/Header'
import Navbar from '../../Components/Frontend_Components/Navbar'
import React from 'react'
import Work from '@/Components/Frontend_Components/Work'
import Price from '@/Components/Frontend_Components/Price'
import ManLuggage from '@/Components/Frontend_Components/ManLuggage'
import Review from '@/Components/Frontend_Components/Review'
import Faq from '@/Components/Frontend_Components/Faq'
import Footer from '@/Components/Frontend_Components/Footer'

const Home = () => {
  return (

      <>
          <Navbar />
          <Header />
          <Work />
          <Price />
          <ManLuggage />
          <Review />
          <Faq />
          <Footer />
      </>
  )
}

export default Home