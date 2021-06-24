import React from 'react'

import Header from '../components/header'
import SEO from '../components/seo'
import Hero from '../components/hero'
import About from '../components/about'
import ImageGalleryMain from '../components/imagegallerymain'
import Slogan from '../components/slogan'
import Footer from '../components/footer'
import Logo from '../components/logo'
// import Sidebar from '../components/sidebar'

import { graphql } from 'gatsby'

import '../styles/styles.scss'

const index = ({data}) => {
  return (
    <>
    <SEO />
    <Header />
    <Hero />
    <Logo />
    <About />
    <ImageGalleryMain images={data.allInstagramContent}/>
    <Slogan />
    <Footer />
    </>
  )
}

export default index

export const query = graphql`
  query InstagramPosts {
    allInstagramContent(limit: 12) {
      edges {
        node {
          id
          caption
          permalink
          localImage {
            childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
    }
  }
`
