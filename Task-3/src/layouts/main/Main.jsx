import ProductItem from "../../components/ProductItem/ProductItem"
import styles from '../main/main.module.css'


import React from 'react'

const Main = ({ func, dataImg, image, handleMainImage }) => {
    return (
        <div className='container'>
            <div className={styles.main}>

                <ProductItem func={func} dataImg={dataImg} image={image} handleMainImage={handleMainImage} />

            </div>

        </div>
    )
}

export default Main