// import { useState } from 'react'
// import Header from "./components/Header/Header"
// import Footer from './components/Footer/Footer'
// import ProductItem from "./components/ProductItem/ProductItem"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Header/>
//     <ProductItem/>
//     <Footer/>
//     </>
//   )
// }

// export default App


import { useEffect, useState } from 'react'
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Main from './layouts/main/Main'
import { dataImg } from '../src/assets/images/Data_img'

function App() {

  const [cart, setCart] = useState([])
  const [image, setImage] = useState(dataImg[1])

  function handleMainImage(item) {

    setImage(item)


  }


  const clearCart=()=>{


    localStorage.removeItem('data')   
   
   setCart([])
   
   
   }

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('data') || '[]');
    setCart(storedData);
  }, []);


  function handleCart() {

    setCart([...cart, image])
   
    localStorage.setItem('data', JSON.stringify([...cart, image]))
  }

  return (
    <>

      <Header data={cart} clearing={clearCart} />
      <Main func={handleCart} dataImg={dataImg} image={image} handleMainImage={handleMainImage} />
      <Footer />
    </>
  )
}

export default App
