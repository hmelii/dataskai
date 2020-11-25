import styles from './AboutUs.module.scss';
import TypedText from "../typed-text/TypedText";

export default function AboutUs() {
  return (
    <div className={styles.aboutUs}>
      <h3 className={styles.aboutUsHeading}>
        <TypedText texts={
          [
            `Use code, not speech\n to formulate\n ML problem`,
            `Hide target for test set.\n Without exceptions`,
            `Share results\n of your work with\n team`,
            `Separate metrics\n computation\n from solution`,
            `Dev/Prod parity\n in ML`,
            `Keep in simple,\n sweetie`
          ]
        } />



      </h3>
      <p>We want to spread the <a href="#">best practices of teamwork and programming</a>  in teams developing ML/AI projects.</p>
      <p>We think that existing products do not offer the proper tradeoff between speed and reliability of the resulting ML/AI solution.</p>
    </div>
  )
}
