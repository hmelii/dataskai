import styles from './OurProjects.module.scss';
import img from '../../images/content/pic2.png';

import Carousel from "../carousel/Carousel";

export default function OurProjects() {
  const projects = [
    {
      id: 1,
      preview: img,
      title: 'Project file structure',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 2,
      preview: img,
      title: 'Project file structure',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 3,
      preview: img,
      title: 'Feature extractor',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 4,
      preview: img,
      title: 'Feature Store',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 5,
      preview: img,
      title: 'Task configuration',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    },
    {
      id: 6,
      preview: img,
      title: 'Modul structure',
      summary: 'This interface allows you to&nbsp;check metrics for all submitted solutions on&nbsp;current task, search for best/worst metric values, make fast text search for submits, hide some fields, etc. Moreover, breadcrumbs on&nbsp;top of&nbsp;the window allows you to&nbsp;switch to&nbsp;all available in&nbsp;GUI tasks and check out scores on&nbsp;it.'
    }
  ];

  return (
    <>
      <h3 className={styles.heading}>Keep your project organized</h3>
      <Carousel items={projects} />
    </>
  )
}
