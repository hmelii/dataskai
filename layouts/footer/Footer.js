import styles from './Footer.module.scss';

function Logo() {
  return (
    <div className={styles.logo} />
  )
}

function Slogan() {
  return (
    <div className={styles.slogan}>
      Dataskai is developed by a team of programmers and ML-enthusiasts who believe that teamwork and best practices are the future of AI/ML solutions.
    </div>
  )
}

function NavItem({ item }) {
  return (
    <li className={styles.navItem}>
      {item.name}
    </li>
  )
}

function Nav() {
  const items = [
    {
      id: 1,
      url: '#',
      name: 'Documentation',
    },

    {
      id: 6,
      url: '#',
      name: 'We hire',
    },
  ]
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        { items.map(item => <NavItem item={item} key={item.id} />) }
      </ul>
    </nav>
  )
}

function Terms() {
  return (
    <div className={styles.terms}>Terms of service</div>
  )
}

function Privacy() {
  return (
    <div className={styles.privacy}>Privacy policy</div>
  )
}

function ContactUs() {
  return (
    <div className={styles.contactUs}>We would be happy to hear from you. Don’t hesitate to send us your thoughts if you have any ideas or comments — <a className={styles.link} href="mailto:betatesters@dataskai.com">betatesters@dataskai.com</a> </div>
  )
}

function Copyright() {
  return (
    <div className={styles.copyright}>Ⓒ DATASKAI, 2021</div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Slogan />
      {/*<Nav />*/}
      {/*<Terms />*/}
      {/*<Privacy />*/}
      <Copyright />

      <ContactUs />
    </footer>
  )
}
