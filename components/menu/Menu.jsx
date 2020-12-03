import styles from './Menu.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useState } from "react";


function Item({ item, handleClick }) {
  return (
    <li className={styles.menuItem}>
      <AnchorLink className={styles.menuLink} href={item.href} onClick={handleClick}>{item.title}</AnchorLink>
    </li>
  )
}

export default function Menu() {
  const [isShown, setIsShown] = useState(false);

  const items = [
    {
      id: 1,
      title: "Beta testing",
      href: "#testing"
    }
  ];

  const handleClick = () => {
    setIsShown(!isShown);
  }

  return (
    <nav className={`${styles.menu} ${isShown?styles.menuActive:''}`}>
      <a className={styles.menuTrigger} onClick={handleClick}>
        <span className={styles.menuTriggerLine1} />
        <span className={styles.menuTriggerLine2} />
        <span className={styles.menuTriggerLine3} />
      </a>
      <ul className={styles.menuList}>
        { items.map(item => <Item item={item} key={item.id} handleClick={handleClick} />) }
      </ul>
    </nav>
  )
}
