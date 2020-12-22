import styles from './Usage.module.scss';

export default function Usage() {
  const handlePrevent = (event) => {
    event.preventDefault()
  }
  return (
    <div className={styles.usage}>
      <div className={styles.free}>
        <h3 className={styles.heading}>FREE for <span className={styles.ib}>non-commercial</span> usage</h3>
        <div className={styles.freeSummary}>
          <p>The version for non-commercial use is free and will always be free.</p>
          <p>If you want to use our tool for making money in a commercial organization, you will need to purchase a license.</p>
        </div>
      </div>
    </div>
  )
}
