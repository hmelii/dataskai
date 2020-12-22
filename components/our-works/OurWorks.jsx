import styles from './OurWorks.module.scss';
import img3 from '../../images/content/pic3.png';
import Carousel from "../carousel/Carousel";

export default function OurWorks() {
  const works = [
    {
      id: 1,
      /*preview: 'images/1x/Task_page__Table.png',
      image: 'images/4x/Task_page__Table_4x.png',*/
      html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HAaDadbtq5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title: 'Team Leaderboard',
      summary: `<p>Check out, compare and share scores of your team test via GUI.</p> 
                <p>Leaderboard is one of the main parts of the team workflow.  It unites your team around the task and provides you with instrument to checkout and explore ML/AI task solutions and metrics, make fast text search for submits, switch between tasks, compare results in task and more.</p>`
    },
    {
      id: 2,
      asciicinema: 'casts/376512.cast',
      title: 'Task Loader & Configs Provider',
      summary: `<p>Use Task Loader as entry point for AI/ML task in Jupyter Notebook, Jupyter Lab or simple Python.</p>
                <p>Task Loader automatically loads configured Python tools for AI/ML task inside project, and also could be used  to staff up all additional Python tools for team inside tasks configurations. Configure tools you wish to be used in a project by default and let all your team know about it.</p>`
    },
    {
      id: 3,
      asciicinema: 'casts/376519.cast',
      title: 'Data Loader & Data Store',
      summary: `<p>Use client-server datastore as central storage of raw tabular data.</p> 
                <p>Data Store stores tabular data from different sources in one place available through REST API.</p>
                <p>Data Loader is a Python tool to play along with Data Store. Tool enforces configured data types, converts data into Pandas dataframes and controls data scope for AI/ML task. Load any configured data into your Python with simple client interface.</p>`
    },
    {
      id: 4,
      asciicinema: 'casts/376515.cast',
      title: 'Feature Loader & Feature Store',
      summary: `<p>Use client-server Feature Store to share features for AI/ML task between team members.</p>
                <p>Feature Store stores tabular features for task available trough REST API.</p>
                <p>Feature Loader is a Python tool to play along with Feature Store. It’s functions are similar to Data Loader but with flat model to access any configured and available features.</p>`
    },
    {
      id: 5,
      preview: img3,
      image: img3,
      title: 'Submitter, Submits Provider & Metrics Service',
      summary: `<p>Submitter gathers results of AI/ML tasks in Submits Provider. Metrics Service scores it.</p>
                <p>Submitter is a Python tool which allows user to submit notebooks, Python code, test predicts, images and more into Submits Provider. Submitter is integrated with Jupyter Notebook and Jupyter Lab to automatically save all artefacts on submit. Metrics Service checks out stored submits and counts metric values.</p>`
    },
    {
      id: 6,
      asciicinema: 'casts/376516.cast',
      title: 'Target loader',
      summary: `<p>Target Loader is a python tool to load target for AI/ML task.</p>
                <p>Target Loader doesn’t store target as tabular data nor any close to features. Target Loader load train target values and doesn’t show any test target values to the user. Althrough it does load empty data structure to be filled for task solution. All indexes in train/test target values are synced with indexes of features from Feature Loader.</p>`
    }
  ];

  return (
    <div className={styles.ourWorks}>
      <h3 className={styles.heading}>Tools for team workflow</h3>
      <Carousel items={works}/>
    </div>
  )
}
