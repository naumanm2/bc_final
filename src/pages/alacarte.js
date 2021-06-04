import React from 'react'

import Header from '../components/header'
import Logo from '../components/logo'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Menu from '../components/menu'
import AboutMenu from '../components/aboutmenu'
import Slogan from '../components/slogan'

const alacarte = () => {
    return (
        <>
        <Header />
        <Logo />
        <AboutMenu />
        <Menu headline="alacarte" />
        <Sidebar active="alacarte" />
        <Slogan />
        <Footer />
        </>
    )
}

export default alacarte
