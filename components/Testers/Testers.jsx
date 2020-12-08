import styles from './Testers.module.scss';

export default function Testers() {
  const handlePrevent = (event) => {
    event.preventDefault()
  }
  return (
    <div id="testing" className={styles.testers}>
      <div className={styles.looking}>
        <h3 className={styles.heading}>Looking for beta testers</h3>
        <p>Now we are looking for teams who are ready to test our solution.</p>
        <p>We are looking for teams practicing supervised machine learning!
          </p>
        <div className={styles.btns}>
          <p>Please, contact us </p>
          <p><a className={styles.link} href={'mailto:betatesters@dataskai.com'}>betatesters@dataskai.com</a></p>
        </div>
      </div>
      <div className={styles.docs}>
        <h4 className={styles.subHeading}>Read our documentation</h4>
        <p>DATASKAI has already helped <a className={styles.link} target="_blank" href="http://www.mlbinf.com">the bioinformatics team</a>  to construct accurate genotype-to-phenotype predictive models based on modern machine learning methods.</p>
      </div>
    </div>
  )
}
