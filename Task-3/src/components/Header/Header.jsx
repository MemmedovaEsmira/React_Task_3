import React from 'react';
import classes from "./header.module.css";
import classNames from "classnames";
import { FiShoppingCart } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";


const Header = () => {
  return (
    <div className='container'>
      <header className={classes.header}>
      <h2 className={classes.header_logo}>Sneakers</h2>
       <ul className={classes.header_menu}>
        <li className={classes.header_menu_item}>
            <a 
            href=""
             className={classNames(classes["header_menu_item--link"])}
            >Collection</a>
        </li>

        <li className={classes.header_menu_item}>
            <a 
            href=""
             className={classNames(classes["header_menu_item--link"])}
            >Men</a>
        </li>

        <li className={classes.header_menu_item}>
            <a 
            href=""
             className={classNames(classes["header_menu_item--link"])}
            >Women</a>
        </li>

        <li className={classes.header_menu_item}>
            <a 
            href=""
             className={classNames(classes["header_menu_item--link"])}
            >About</a>
        </li>

        <li className={classes.header_menu_item}>
            <a 
            href=""
             className={classNames(classes["header_menu_item--link"])}
            >Contact</a>
        </li>
       </ul>

       <div className={classes.header_right}>
        <div className={classes.basket}>
        <FiShoppingCart />
        </div>
        <div className={classes.avatar}>
        <RxAvatar />
        </div>
       </div>

      </header>

      
    </div>
  )
}

export default Header
