import { createContext } from 'react'


const DataProps = {
  showModal: Boolean,
  addItem: Number,
  size: Number,
  showMenu: Boolean,
  menuSize: String,
  openModal: () => {},
  setMenu: () => {},
  desktopMenu: Boolean
}

export const Context = createContext(DataProps)