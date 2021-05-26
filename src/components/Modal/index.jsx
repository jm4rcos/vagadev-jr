import React, { useContext } from 'react'
import { Context } from '../../context'

import closeBtn from '../../svgs/close_btn.svg'

import './modal.css'

const Modal = () => {
  const { setShowModal } = useContext(Context)

  function closeModal(){
    setShowModal(false)
  }

  return <div className='modal'>
    <div className='container'>
      <button onClick={() => closeModal()}>
        <img src={closeBtn} alt="" className='close' draggable={false}/>
      </button>
      <p>Pedido realizado com sucesso!</p>
      <img src='mario.svg' alt="" draggable={false} className='mario'/>
    </div>
  </div>
}

export default Modal