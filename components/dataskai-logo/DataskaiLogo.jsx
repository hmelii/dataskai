import styles from './DataskaiLogo.module.scss';

export default function DataskaiLogo() {
  return (
    <div className={styles.dataskaiLogo}>
      <div className={styles.dataskaiLogoTitle}>
        Developed by&nbsp;a&nbsp;team of&nbsp;programmers and <span className={styles.dataskaiLogoTitleName}>ML&ndash;enthusiasts</span>
      </div>
      <div className={styles.dataskaiLogoImage} />
      <div className={styles.dataskaiLogoText}>
        the tool for AI/ML projects concentrated on&nbsp;<span className={styles.dataskaiLogoTextWarn}>team work</span> and rapid development
      </div>
    </div>
  )
}
