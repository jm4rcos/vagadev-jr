import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../../context'

import zeldaBanner from '../../img/zelda_banner.jpg'
import sekiroBanner from '../../img/sekiro_banner.jpg'

import leftArrow from '../../svgs/angle-left-solid.svg'
import rightArrow from '../../svgs/angle-right-solid.svg'

import './products.css'

import { featured } from '../services/data'

const Products = () => {
  const [select, setSelect] = useState()
  const [currentProduct, setCurrentProduct] = useState(0)
  const { setShowModal, setAddItem, addItem, size } = useContext(Context)

  let coinAudio = new Audio('/coin.m4a')

  function nextProduct(){
    setCurrentProduct(currentProduct >= featured.length - 1 ? 0 : currentProduct +1)
  }
  function previousProduct(){
    setCurrentProduct(currentProduct === 0 ? featured.length - 1 : currentProduct -1)
  }


  const PlayCoin = () => {
    coinAudio.play()
  }

  function openModal(id){
    setSelect(id)
    PlayCoin()
    setAddItem(addItem +1)

    setTimeout(() => {
      setShowModal(true)
    }, 1000);
  }

  function handleSelect(id){
    
    if (select === id) return 'btnBought'
    else return 'btn'
  }
  
  function handleChangeName(id){
    if (select === id) return 'COMPRADO'
    else return 'COMPRAR'
  }

  function setMarioImg(id){
    if (select === id){
      return (<img src='mario-btn.svg' alt="" className='marioBtn'/>)
    }
  }

  return (<>
    <div className='products'>
      <div className='main'>
        <div className='card1'>
          <img src={zeldaBanner} alt="" className='mainImage'/>
          <div className='mainCardInfo'>
            <p>The Legend of Zelda - Breath of the Wild</p>
            <div className='line'></div>
          </div>
        </div>

        <div className='card2'>
        <img src={sekiroBanner} alt="" className='mainImage'/>
          <div className='mainCardInfo'>
            <p>SEKIRO - Shadows die twice</p>
            <div className='line'></div>
          </div>
        </div>
      </div>

      <div className='featuredProjects'>

        <div className='featuredProjectsTitle'>
          <img src='dots.svg' alt="" />
          <p style={{marginLeft:'1rem'}}>Produtos em destaque</p>
        </div>
        <div className='featuredCards'>

          {size <= 850 ? (<>
          <button className='left' onClick={previousProduct}>
            <img src='left.svg' alt="" className='arrowLeft'/>
          </button>

            <div className='cardMobile'>
              <img src={featured[currentProduct].image} alt=""/>
              <div className='featuredCardInfoMobile'>
                <p className='cardP'>{featured[currentProduct].title}</p>
                <h1 className='cardPrice'>{featured[currentProduct].price}</h1>
                <button
                  className={handleSelect(featured[currentProduct].id)}
                  onClick={() => openModal(featured[currentProduct].id)}>
                    {handleChangeName(featured[currentProduct].id)}
                    {setMarioImg(featured[currentProduct].id)}
                  </button>
              </div>
            </div>
          
            <button className='right' onClick={nextProduct}>
              <img src='right.svg' alt="" className='arrowRight'/>
            </button>
          </>)
          :
          (
            featured.map(item => {
              const {title, image, price, id} = item
              return (<div key={id}>
                <img src={image} alt="" />
                <div className='featuredCardInfo'>
                  <p className='cardP'>{title}</p>
                  <h1 className='cardPrice'>{price}</h1>
                  <button
                  className={handleSelect(id)}
                  onClick={() => openModal(id)}>
                    {handleChangeName(id)}
                    {setMarioImg(id)}
                  </button>
                </div>
              </div>)
            })
          )}


          {/*  */}

        </div>
      </div>
    </div>
  </>)
}

export default Products
