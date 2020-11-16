import styles from './Wrapper.module.scss';

export default function Wrapper({children}) {
  console.log(children)
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperIn}>
        {children}
      </div>
    </div>
  )
}
