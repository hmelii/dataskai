import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h3 className={styles.aboutUsHeading}>Hide target for test set. Without exceptions</h3>
      <p>We want to spread the <a href="#">best practices of teamwork and programming</a>  in teams developing ML/AI projects.</p>
      <p>We think that existing products do not offer the proper tradeoff between speed and reliability of the resulting ML/AI solution.</p>
    </div>
  )
}
