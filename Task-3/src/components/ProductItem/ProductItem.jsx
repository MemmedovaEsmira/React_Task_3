import React, { useState } from 'react';
import styles from "./productitem.module.css";
import { dataImg } from '../../assets/images/Data_img';


const ProductItem = ({image, handleMainImage}) => {
 const [counter, setCounter] = useState(1);
 const[product,setProductPrice] = useState(125)
 const [cartData,setCartData] = useState([])

 const handleInc=()=>{
setCounter((prev) => prev + 1)
 }

 const handleDec=()=>{
  counter > 0 ? setCounter(prev => prev - 1) : 0

 }

 const handleAddToCart =() =>{
setCartData(dataImg)
 }

  return (
    <div className='container'>
      <div className={styles.product}>
        <div className={styles.product_images}>

        <div className={styles.product_images_main}><img src={image} alt="" /></div>

<div className={styles.product_images_container}>

    {dataImg.map((item, index) => <div className={styles.product_images_container_item} key={index}>

        <img src={item} alt="" onClick={() => { handleMainImage(item) }} />
    </div>)}
    </div>
         
        </div>
        
        <div className={styles.product_content}>
            <h2 className={styles.product_content_title}>Product title</h2>
            <h2 className={styles.product_content_desc}>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>

            <h2 className={styles.product_content_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates 
                laboriosam atque error accusamus fugit suscipit nostrum aperiam 
                doloribus dolorum explicabo. Consectetur repellendus porro eligendi 
                enim amet, maiores tempore neque. Quo?
                </h2>
           
          
          <p className={styles.product_content_price} >${(125 * counter) * 2}</p>

           <div className={styles.product_content_counter}>
            <span className={styles.product_content_counter_dec} onClick={handleDec}>-</span>
            <span className={styles.product_content_counter_val}>{counter}</span>
            <span className={styles.product_content_counter_inc} onClick={handleInc}>+</span>
           </div>

           <button className={styles.product_content_btn} onClick={handleAddToCart}> Add to cart </button>
        </div>

      </div>
    </div>
  )
}

export default ProductItem
