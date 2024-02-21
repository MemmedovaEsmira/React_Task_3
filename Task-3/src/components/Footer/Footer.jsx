import React from 'react'
import styles from "./footer.module.css";
import classes from "./footer.module.css";
import classNames from "classnames";


const Footer = () => {
  return (
    <div className='container'>
      <div className={styles.footer}> 
      <ul className={classes.footer_menu}>
        <li className={classes.footer_menu_item}>
            <a 
            href=""
             className={classNames(classes["footer_menu_item--link"])}
            >Collection</a>
        </li>

        <li className={classes.footer_menu_item}>
            <a 
            href=""
             className={classNames(classes["footer_menu_item--link"])}
            >Men</a>
        </li>

        <li className={classes.footer_menu_item}>
            <a 
            href=""
             className={classNames(classes["footer_menu_item--link"])}
            >Women</a>
        </li>

        <li className={classes.footer_menu_item}>
            <a 
            href=""
             className={classNames(classes["footer_menu_item--link"])}
            >About</a>
        </li>

        <li className={classes.footer_menu_item}>
            <a 
            href=""
             className={classNames(classes["footer_menu_item--link"])}
            >Contact</a>
        </li>
       </ul>
      </div>
    </div>
  )
}

export default Footer
