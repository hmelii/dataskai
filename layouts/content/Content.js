import styles from './Content.module.scss';

export default function Content({ children }) {

  return (
    <main className={styles.content}>

      { children }

    </main>
  )
}
