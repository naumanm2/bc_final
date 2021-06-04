import React from 'react'

import Header from '../components/header'
import Hero from '../components/hero'
import About from '../components/about'
import ImageGalleryMain from '../components/imagegallerymain'
import Slogan from '../components/slogan'
import Footer from '../components/footer'
import Logo from '../components/logo'
import Sidebar from '../components/sidebar'

import '../styles/styles.scss'

const index = () => {
  return (
    <>
    <Header />
    <Hero />
    <Logo />
    <About />
    <ImageGalleryMain />
    <Slogan />
    <Footer />
    <Sidebar active="lunch"/>
    </>
  )
}

export default index
