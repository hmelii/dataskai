import styles from './Header.module.scss';
import Logo from "../../components/logo/Logo";
import Menu from "../../components/menu/Menu";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo/>
      <Menu/>
    </header>
  )
}
