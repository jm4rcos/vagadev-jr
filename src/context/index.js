import { createContext } from 'react'


const DataProps = {
  showModal: Boolean,
  addItem: Number,
  size: Number,
  showMenu: Boolean,
  openModal: () => {},
  setMenu: () => {}
}

export const Context = createContext(DataProps)