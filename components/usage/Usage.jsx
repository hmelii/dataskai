import styles from './Usage.module.scss';

export default function Usage() {
  return (
    <div className={styles.usage}>
      <div className={styles.free}>
        <h3 className={styles.heading}>FREE for <span className={styles.ib}>non-commercial</span> usage</h3>
        <div className={styles.freeSummary}>
        <p>The version for non-commercial use is free and will always be free. <a href="">See the license</a> .</p>
        <p>If you want to use our tool for making money in a commercial organization, you will need to <a href="#">purchase a license.</a></p>
        </div>
      </div>
      {/*<form className={styles.form}>
        <h4 className={styles.subHeading}>Get in touch</h4>

        <p className={styles.lbs}><label className={styles.label} htmlFor="text">We are open to suggestions, if you have any ideas, thoughts or even objections, please write to us.</label></p>
        <p><textarea id="text" className={styles.textarea}/></p>
        <p className={styles.lbs}><label htmlFor="email">Leave mail, ODS slack or telegram if you want us to answer:</label></p>
        <p><input className={styles.textfield} id="email" type="email" value=""/></p>
        <p className={styles.btns}>
          <button className={styles.btn} type="submit">Send</button>
        </p>
      </form>*/}
    </div>
  )
}
