import styles from './Usage.module.scss';

export default function Usage() {
  return (
    <div className={styles.usage}>
      <div className={styles.free}>
      <h3 className={styles.heading}>FREE for non-commercial usage</h3>
      <p>The version for non-commercial use is free and will be free. See the license.</p>
      <p>If you want to use our tool for making money in a commercial organization, you will need to <a className={styles.link} href="#">purchase a license</a> </p>
      </div>
      <h4 className={styles.subHeading}>Get in touch</h4>
      <form className={styles.form}>
        <p className={styles.lbs}><label className={styles.label} htmlFor="text">We are open to suggestions, if you have any ideas, thoughts or even objections, please write to us.</label></p>
        <p><textarea id="text" className={styles.textarea} /></p>
        <p className={styles.lbs}><label htmlFor="email">Leave mail, ODS slack or telegramm if you want us to answer:</label> </p>
        <p><input className={styles.textfield} id="email" type="email" value="" /></p>
        <p className={styles.btns}><button className={styles.btn} type="submit">Send</button> </p>
      </form>
    </div>
  )
}
