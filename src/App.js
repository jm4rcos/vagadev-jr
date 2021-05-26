import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Products from './components/Products'
import Footer from './components/Footer'

import Modal from './components/Modal'
import {Context} from './context'
import Menu from './components/Menu'

import './global.css'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [addItem, setAddItem] = useState(0)
  const [size, setSize] = useState(window.innerWidth)
  const [showMenu, setShowMenu] = useState(false)
  
  function setModal(props, item){
    setShowModal(props)
    setAddItem(item)
  }

  useEffect(() => {
    const handleSize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleSize)

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [setSize, size])

  return (
  <Context.Provider value={{showModal, setShowModal, setModal, addItem, setAddItem, size, setShowMenu, showMenu}}>
      <div>
        {showModal && <Modal/>}
        {showMenu && <Menu/>}
        <Header/>
        <Products/>
        <Footer/>
      </div>
    </Context.Provider>
  )
}

export default App
