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
      title: 'Task and target loader',
      summary: 'At any moment you can see teammate progress'
    },
    {
      id: 2,
      title: 'Feature Store',
      summary: 'Effectively search and use features for solving DS tasks Build self-explanatory feature naming system for easy interpretation and dialog with experts Create automatic services for interpretation and explanation of features for experts and managers.'
    },
    {
      id: 3,
      title: 'Metric Service',
      summary: 'Effectively search and use features for solving DS tasks.Build self-explanatory feature naming system for easy interpretation and dialog with experts Create automatic services for interpretation and explanation of features for experts and managers.'
    },
    {
      id: 4,
      title: 'Submitter',
      summary: 'Effectively search and use features for solving DS tasks.Build self-explanatory feature naming system for easy interpretation and dialog with experts Create automatic services for interpretation and explanation of features for experts and managers.'
    }

  ];

  return (
    <>
      <h3 className={styles.heading}>Make frequent operations easier </h3>
      <h4 className={styles.subHeading}>even don't do it at all</h4>
      <List items={operations} />
    </>
  )
}
