/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from 'react'
import { BannerSliderData } from '../Slider/SliderData'
import { Context } from '../../context'
import { Hamburguer, logo, paperPlane, searchIcon, shoppingBag } from '../../svgs'

import leftArrow from '../../svgs/angle-left-solid.svg'
import rightArrow from '../../svgs/angle-right-solid.svg'

import './header.css'
import Menu from '../Menu'

const Header = () => {
  const [currentBackground, setCurrentBackground] = useState(0)
  const { addItem, size, setShowMenu, showMenu } = useContext(Context)

  const destopWidth = BannerSliderData[currentBackground].desktop
  const mobileWidth = BannerSliderData[currentBackground].mobile

  function openMenu(){
    setShowMenu(true)
  }

  return(<div className='header'>
    <img
    src={size <= 650 ? BannerSliderData[currentBackground].mobile : BannerSliderData[currentBackground].desktop} 
    alt="" draggable={false} 
    className='background'/>
    
    <nav>
      <div>
        <button className='menu' onClick={openMenu}>
          <img src={Hamburguer} alt="" />
        </button>
        <img src={logo} alt="" draggable={false} className='logo'/>
      </div>

      {showMenu && (<Menu/>)}

      <ul>
        <img src={paperPlane} alt="Contact" className='paperPlane'/>
        <a href="#">CONTATO</a>

        <span className='separator'></span>

        <img src={searchIcon} alt="Contact" className='searchIcon'/>
        <a href="#">BUSCAR</a>

        <span className='separator'></span>
        
        <img src={shoppingBag} alt="Shopping Bag" className='shoppingBag'/>
        {addItem >=1 && <div className='itemsBought'>{addItem}</div>}
      </ul>
    </nav>

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

    <div className='switchDiv'>
      <span className='sideSpan'>MORTAL KOMBAT</span>
      <span className='line'></span>
      <div className='bottom'>
        <p>1/2</p>
        <div className='arrows'>
          <button className='left' onClick={() => setCurrentBackground(0)}>
            <img src={leftArrow} alt="" />
          </button>
          <button className='right'onClick={() => setCurrentBackground(1)}>
            <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </div>

  </div>)
}

export default Header