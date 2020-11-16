import styles from './Menu.module.scss';


function Item({ item }) {
  return (
    <li className={styles.menuItem}>
      <a className={styles.menuLink} href={item.url}>{item.title}</a>
    </li>
  )
}

export default function Menu() {
  const items = [
    {
      id: 1,
      title: "Approach",
      url: "/"
    },
    {
      id: 2,
      title: "About us",
      url: "/"
    }
  ];
  return (
    <nav className={styles.menu}>
      <a className={styles.menuTrigger}>
        <span className={styles.menuTriggerLine1} />
        <span className={styles.menuTriggerLine2} />
        <span className={styles.menuTriggerLine3} />
      </a>
      <ul className={styles.menuList}>
        { items.map(item => <Item item={item} key={item.id} />) }
      </ul>
    </nav>
  )
}
