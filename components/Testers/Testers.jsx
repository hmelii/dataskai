import styles from './Testers.module.scss';

export default function Testers() {
  return (
    <>
      <div className={styles.testers}>
        <div className={styles.looking}>
        <h3 className={styles.heading}>Looking for beta testers</h3>
        <p>Now we are looking for teams who are ready to test our solution.</p>
        <p>We are looking for teams doing anything =) Or, if you want us to help you organize team work, we will be glad to help you</p>
        <div className={styles.btns}>
        <p><a className={`${styles.btn} ${styles.btnBg}`}>I have a team and ready to test</a></p>
        <p><a className={`${styles.btn} ${styles.btnBgTransparent}`}>Join waitlist</a></p>
        </div>
        </div>
        <div className={styles.docs}>
        <h4 className={styles.subHeading}>Read our <a href={styles.link}>documentation</a></h4>
        <p>Dataskai already help <a className={styles.link} href="">the bioinformatics team</a> to construct accurate genotype-to-phenotype predictive models based on modern machine learning methods</p>
        </div>
      </div>
    </>
  )
}
