import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import ImageGalleryMain from '../components/imagegallerymain'
import Slogan from '../components/slogan'
import Footer from '../components/footer'

import '../styles/styles.scss'

const index = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <ImageGalleryMain />
    <Slogan />
    <Footer />
    </>
  )
}

export default index
