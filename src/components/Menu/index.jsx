import React, { useContext } from 'react'
import { Context } from '../../context/index'

import './menu.css'

function Menu() {
  const { size } = useContext(Context)


  return (<div className='mainMenu'>
    <div className={size <= 850 ? 'menuMobile' : 'menuContainer' }>
      <ul id='luta'>
        <label htmlFor="luta">Luta</label>
        <li>Mortal Kombat</li>
        <li>Smash Bros</li>
        <li>Killer Instict</li>
        <li>DBZ Kakarot</li>
      </ul>
      <span></span>

      <ul id='aventura'>
      <label htmlFor="aventura">Ação / Aventura</label>
        <li>GTA V</li>
        <li>Tomb Raider</li>
        <li>HALO</li>
        <li>Call of Duty</li>
      </ul>
      <span></span>

      <ul id='corrida'>
        <label htmlFor="corrida">Corrida</label>
        <li>NEED For SPEED</li>
        <li>Forza Horizon</li>
      </ul>

    </div>
  </div>)
}

export default Menu
