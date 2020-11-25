import styles from './Operations.module.scss';

function ListItem({ item }) {
  return (
    <li className={styles.listItem}>
      <div className={styles.listTitle}>{ item.title }</div>
      <div className={styles.listSummary}>{ item.summary }</div>
    </li>
  )
}

function List({ items }) {
  return (
    <ul className={styles.list}>
      { items.map(item => <ListItem item={item} key={item.id} />) }
    </ul>
  )
}


export default function Operations() {
  const operations = [
    {
      id: 1,
      title: 'Templates',
      summary: 'Wizard for generating and configuring ML/AI projects. Project structure and architecture fitted for long running projects (1month +).'
    },
    {
      id: 2,
      title: 'Architecture',
      summary: 'EService-oriented architecture, based on docker technology. Framework is built on top of opensource products, libraries and components.'
    },
    {
      id: 3,
      title: 'Installation',
      summary: 'Use local installation on your own premises for short-term team work, or installation in datacenters/cloud premises for corporate use.'
    },
    {
      id: 4,
      title: 'MLOps',
      summary: 'Deploy AI/ML solutions  in framework instance. Datascientist have end-to-end responsibility for the whole AI/ML solution.'
    }

  ];

  return (
    <div className={styles.operations}>
      <h3 className={styles.heading}>Make frequent operations easier </h3>
      <h4 className={styles.subHeading}>even don't do it at all</h4>
      <List items={operations} />
    </div>
  )
}
