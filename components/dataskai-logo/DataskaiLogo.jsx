import styles from './DataskaiLogo.module.scss';

export default function DataskaiLogo() {
  return (
    <div className={styles.dataskaiLogo}>
      <div className={styles.dataskaiLogoTitle}>
        Developed by a team of programmers and ML-enthusiasts
      </div>
      <div className={styles.dataskaiLogoImage} />
      <div className={styles.dataskaiLogoText}>
        the framework for AI/ML projects concentrated on <a href="#">team work</a>  and rapid development
      </div>
    </div>
  )
}
