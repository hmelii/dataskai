import styles from './OurWorks.module.scss';
import img from '../../images/content/pic1.png';
import Carousel from "../carousel/Carousel";

export default function OurWorks() {
  const works = [
    {
      id: 1,
      preview: img,
      title: 'Team Leaderboard',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 2,
      preview: img,
      title: 'Project Wizard ',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 3,
      preview: img,
      title: 'Data Loader and Data Store',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 4,
      preview: img,
      title: 'Feature Loader and Feature Store',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 5,
      preview: img,
      title: 'Metrics Service and Submits Storage',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 6,
      preview: img,
      title: 'Feature Extractor and Prediction Builder',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    }
  ];

  return (
    <>
      <h3 className={styles.heading}>Tools for team workflow</h3>
      <Carousel items={works}/>
    </>
  )
}
