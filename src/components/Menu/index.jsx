import React from 'react'
import './menu.css'

function Menu() {
  return (
    <div className=/* 'menuContainer' */'menuMobile'>
      
      <ul id='luta'>
        <label htmlFor="luta">Luta</label>
        <li>Mortal Kombat</li>
        <li>Smash Bros</li>
        <li>Killer Instict</li>
        <li>DBZ Kakarot</li>
      </ul>

      <ul id='aventura'>
      <label htmlFor="aventura">Ação/Aventura</label>
        <li>GTA V</li>
        <li>Tomb Raider</li>
        <li>HALO</li>
        <li>Call of Duty</li>
      </ul>

      <ul id='corrida'>
        <label htmlFor="corrida">Corrida</label>
        <li>NEED For SPEED</li>
        <li>Forza Horizon</li>
      </ul>

    </div>
  )
}

export default Menu
