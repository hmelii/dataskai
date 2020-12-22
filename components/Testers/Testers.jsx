import styles from './Testers.module.scss';

export default function Testers() {
  const handlePrevent = (event) => {
    event.preventDefault()
  }
  return (
    <div id="testing" className={styles.testers}>
      <h3 className={styles.heading}>Looking for beta testers</h3>
      <div className={styles.looking}>

        Now we are looking for teams who are ready to test our solution. We are waiting for teams practicing supervised machine learning!


      </div>
      <div className={styles.btns}>
        <p>Please, contact us </p>
        <p><a className={styles.link} href={'mailto:betatesters@dataskai.com'}>betatesters@dataskai.com</a></p>
      </div>
      <div className={styles.docs}>
        DATASKAI already help <a className={styles.link} target="_blank" href="http://www.mlbinf.com">the bioinformatics team</a> to construct accurate genotype-to-phenotype predictive models based on modern machine learning methods!
      </div>
    </div>
  )
}
