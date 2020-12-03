import styles from './Footer.module.scss';

function Logo() {
  return (
    <div className={styles.logo} />
  )
}

function Slogan() {
  return (
    <div className={styles.slogan}>
      <p>Dataskai is developed by a team of programmers and ML-enthusiasts who believe that teamwork and best practices are the future of AI/ML solutions.</p>
    </div>
  )
}

function NavItem({ item }) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href={item.url}>{item.name}</a>
    </li>
  )
}

function Nav() {
  const items = [
    {
      id: 1,
      url: '/',
      name: 'Documentation',
    },
   /* {
      id: 2,
      url: '/',
      name: 'Contact us',
    },
    {
      id: 3,
      url: '/',
      name: 'Beta Testing',
    },
    {
      id: 4,
      url: '/',
      name: 'About us',
    },
    {
      id: 5,
      url: '/',
      name: 'List of best practicies',
    },*/
    {
      id: 6,
      url: '/',
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
    <div className={styles.terms}><a className={styles.termsLink}>Terms of service</a></div>
  )
}

function Privacy() {
  return (
    <div className={styles.privacy}><a className={styles.privacylink}>Privacy policy</a></div>
  )
}

function ContactUs() {
  return (
    <div className={styles.contactUs}>We would be happy to hear from you. Don’t hesitate to send us your thoughts if you have any ideas or comments — <a href="mailto:betatesters@dataskai.com">betatesters@dataskai.com</a> </div>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Slogan />
      <Nav />
      <Terms />
      <Privacy />
      <ContactUs />
    </footer>
  )
}
