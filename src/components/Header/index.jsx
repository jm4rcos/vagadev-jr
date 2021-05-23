/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import logo from '../../svgs/logo.svg'
import Hamburguer from '../../svgs/icon_hamburguer.svg'
import shoppingBag from '../../svgs/shopping-bag-solid.svg'
import paperPlane from '../../svgs/paper-plane.svg'
import searchIcon from '../../svgs/search-solid.svg'

import bannerDesktop1 from '../../img/principal_banner_desktop.jpg'

import leftArrow from '../../svgs/angle-left-solid.svg'
import rightArrow from '../../svgs/angle-right-solid.svg'

import './header.css'

const Nav = () => {
  return(<div className='header'>
    <img src={bannerDesktop1} alt="" draggable={false} className='background'/>
    <nav>
      <div>
        <button className='menu'>
          <img src={Hamburguer} alt="" />
        </button>
        <img src={logo} alt="" draggable={false} className='logo'/>
      </div>

      <ul>
        <img src={paperPlane} alt="Contact" className='paperPlane'/>
        <a href="#">CONTATO</a>

        <span className='separator'></span>

        <img src={searchIcon} alt="Contact" className='searchIcon'/>
        <a href="#">BUSCAR</a>

        <span className='separator'></span>
        
        <img src={shoppingBag} alt="Shopping Bag" className='shoppingBag'/>
      </ul>
    </nav>

    <div className='switchDiv'>
      <span className='sideSpan'>MORTAL KOMBAT</span>
      <span className='line'></span>
      <div className='bottom'>
        <p>1/2</p>
        <div className='arrows'>
          <button className='left'>
            <img src={leftArrow} alt="" />
          </button>
          <button className='right'>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>

  <div className='banner'>

      <div className='info'>
        <h1 className='title'>MORTAL KOMBAT</h1>
        <h1 className='price'>R$ 299<sup>,99</sup></h1>
        <p>
        Mortal Kombat X combina uma apresentação cinemática única 
        com uma jogabilidade totalmente nova. Os jogadores podem 
        escolher pela primeira vez diversas variantes de cada 
        personagem, afetando tanto a estratégia como o estilo de 
        luta.
        </p>
      </div>
    </div>
  </div>)
}

export default Nav