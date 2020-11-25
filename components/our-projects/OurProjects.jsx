import styles from './OurProjects.module.scss';
import img from '../../images/content/pic2.png';

import Carousel from "../carousel/Carousel";

export default function OurProjects() {
  const projects = [
    {
      id: 1,
      html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/5SUC96V8xwY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
      title: 'Task configuration',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    },
    {
      id: 2,
      preview: img,
      title: 'Project structure',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    },
    {
      id: 3,
      preview: img,
      title: 'Data and features naming conventions',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    },
    {
      id: 4,
      preview: img,
      title: 'Default AI/ML solution architecture',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    },
    {
      id: 5,
      preview: img,
      title: 'Use domain models in AI/ML projects',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    },
    {
      id: 6,
      preview: img,
      title: 'Logging and monitoring',
      summary: '<p>Create and share task configuration between team members.</p> <p>Add descriptions for tasks, combine and automatically load all necessary client tools and libraries into your notebook.</p> <p>Control the scope of the team member responsibility and functions via loaded instruments.</p>'
    }
  ];

  return (
    <>
      <h3 className={styles.heading}>Keep your project organized</h3>
      <Carousel items={projects} />
    </>
  )
}
