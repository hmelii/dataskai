import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h3 className={styles.aboutUsHeading}>Hide target for test set. Without exceptions</h3>
      <p>We&nbsp;want to&nbsp;help teams to&nbsp;organize work by&nbsp;implementing the <span className={styles.aboutUsWarn}>best practices of&nbsp;teamwork</span> in&nbsp;one place. So&nbsp;you don&rsquo;t have to&nbsp;keep them in&nbsp;your mind.</p>
      <p>We&nbsp;think that existing products do&nbsp;not instill the right habits in&nbsp;terms of&nbsp;teamwork and do&nbsp;not bring the proper tradeoff speed/reliability of&nbsp;the result.</p>
    </div>
  )
}
