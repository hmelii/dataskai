import styles from './OurWorks.module.scss';
import img from '../../images/content/pic1.png';
import Carousel from "../carousel/Carousel";

export default function OurWorks() {
  const works = [
    {
      id: 1,
      preview: img,
      title: 'Team Leaderboard',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    },
    {
      id: 2,
      preview: img,
      title: 'Project Wizard ',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    },
    {
      id: 3,
      preview: img,
      title: 'Data Loader and Data Store',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    },
    {
      id: 4,
      preview: img,
      title: 'Feature Loader and Feature Store',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    },
    {
      id: 5,
      preview: img,
      title: 'Metrics Service and Submits Storage',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    },
    {
      id: 6,
      preview: img,
      title: 'Feature Extractor and Prediction Builder',
      summary: '<p>Check out, compare and share scores of your team test via GUI.</p> <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, etc.</p> <p>Beadcrumbs on top of the window allows you to switch to all available tasks in project.</p>'
    }
  ];

  return (
    <>
      <h3 className={styles.heading}>Tools for team workflow</h3>
      <Carousel items={works}/>
    </>
  )
}
