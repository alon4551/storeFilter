import React, { useState, createContext, useEffect, useRef } from 'react'
import HomePage from './pages/homepage'
import Navbar from './components/navbar'

export const Store = createContext([])
export const StoreFilter = createContext('')
function App() {
  const [store, setStore] = useState([])
  const [storeFilter, setStoreFilter] = useState([])
  const getStore = async () => {
    setStore(await fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setStoreFilter(data.products)
        return data
      }))
  }
  useEffect(() => {
    getStore()

  }, [])
  return (
    <StoreFilter.Provider value={{ storeFilter, setStoreFilter }}>
      <Store.Provider value={{ store }}>
        <Navbar />
        <HomePage />
      </Store.Provider>
    </StoreFilter.Provider>
  )
}

export default App
