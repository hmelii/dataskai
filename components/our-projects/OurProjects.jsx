import styles from './OurProjects.module.scss';
import img3 from '../../images/content/pic3.png';

import Carousel from "../carousel/Carousel";

export default function OurProjects() {
  const projects = [
    {
      id: 1,
      preview: img3,
      image: img3,
      title: 'Wizard',
      summary: `<p>Create new project instances and configure existing with CLI.</p>
                <p>Wizard is a CLI tool for installation, creating project instances, configuring services, starting/stopping services, managing tasks, domain models, managing client docker containers and more.</p>`
    },
    {
      id: 2,
      preview: 'images/1x/Pic_project_structure.png',
      image: 'images/4x/Pic_project_structure_4x.png',
      title: 'Project structure',
      summary: `<p>All instances of DATASKAI projects has templated structure.
                <p>This behaviour is an answer to AI/ML exploration challenge. It contains all files related to project and intended to be in sync with all clients. To fulfill this requirement project files are stored in git.</p>
                <p>Default project structure help your team to easily switch between different projects, and navigate inside the project.</p>`
    },
    {
      id: 3,
      preview: 'images/1x/img.png',
      image: 'images/4x/img_4x.png',
      title: 'Data & features naming conventions',
      summary: `<p>Data and features naming conventions solves a lot of issues inside your team and in communication with experts.</p>
                <p>It’s easy to understand origin and all the transformations applied to data. You can enforce naming conventions in feature extractors and solve miscommunication at the root of a problem. You can use simple name resolving to give a suggestion and explanation to user or expert when you communicate.</p>`
    },
    {
      id: 4,
      preview: 'images/1x/img__Default_AIML.png',
      image: 'images/4x/img__Default_AIML.png',
      title: 'Default AI/ML solution architecture',
      summary: `<p>We use straighforward and simplest possible solution. There is a lot of situations where simple is enough.</p> 
                <p>Our solution include few steps: data gathering -> feature extraction -> model inference. All this stages run asyncronously. Don’t use pipelines if you don’t need it. Use data storage to reuse data for other ML tasks and feature store to share features between colleagues and ML models.</p>`
    },
    {
      id: 5,
      preview: 'images/1x/img__Domain models.png',
      image: 'images/4x/img__Domain models.png',
      title: 'Domain models in AI/ML projects',
      summary: `<p>Divide code into explicit parts - responsible for AI/ML, and responsible for domain.</p>
                <p>AI/ML projects struggles from misunderstanding. It’s a struggle inside your team, and a struggle in interaction between team and domain experts.</p>
                <p>Build the code of domain model and share it between many AI/ML tasks. Put all the domain knowledge inside it, and all the AI/ML knowledge outside.</p>`
    },
    {
      id: 6,
      preview: 'images/1x/with scrinshots.png',
      image: 'images/4x/with scrinshots_4x.png',
      title: 'Logging and monitoring',
      summary: `<p>DATASKAI has built-in support for graylog, netdata and redash.</p>
                <p>All deployed services are connected to graylog by default, so all logs are collected in one logging and monitoring system. Netdata is used to check network load. Redash is used to visualize data, features, predictions and more.</p>`
    }
  ];

  return (
    <div className={styles.ourProjects}>
      <h3 className={styles.heading}>Keep your project organized</h3>
      <Carousel items={projects} />
    </div>
  )
}
