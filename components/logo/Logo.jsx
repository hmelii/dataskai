import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href={'/'}>DATASKAI</a>
    </div>
  )
}
