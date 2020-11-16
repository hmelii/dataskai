import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import styles from './OurWork.module.scss';
import img from '../../images/content/pic1.png';
import { useLayoutEffect } from "react";

function WorkTabs({ items }) {

  return (
    <ul className={styles.ourWorkTabs}>
      {items.map(tab => <WorkTabsItem tab={tab} key={tab.id}/>)}
    </ul>
  )
}

function WorkTabsItem({ tab }) {
  return (
    <li className={styles.ourWorkTabsItem}>
      <a className={styles.ourWorkTabsLink}>{tab.name}</a>
    </li>
  )
}

function WorkCarouselItem({ item, width }) {
  console.log('vw', width);
  return (
    <div className={styles.workCarouselItem}>
      <div className={styles.workCarouselFig}>
        <img className={styles.workCarouselImg} src={item.preview} alt={item.title} />
      </div>
      <div className={styles.workCarouselContext}>
        <div className={styles.workCarouselTitle}>
          {item.title}
        </div>
        <div className={styles.workCarouselSummary}>
          {item.summary}
        </div>
      </div>
    </div>
  );
}

function WorkCarousel({ items }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  let vw = 0;

  // useLayoutEffect(() => {
  //   if (typeof document !== 'undefined') {
  //     vw = window.innerWidth;
  //     window.addEventListener('resize', () => {
  //       vw = window.innerWidth;
  //     });
  //     console.log(vw);
  //   }
  //
  // }, []);

  return (
    <Slider
      {...settings}
    >
      { items.map(slide => <WorkCarouselItem width={vw} item={slide} key={slide.id} />) }

    </Slider>
  )
}

export default function OurWork() {
  const items = [
    {
      id: 1,
      preview: img,
      title: 'Team Leaderboard',
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
  ]
  return (
    <div className={styles.ourWork}>
      <h3 className={styles.ourWorkHeading}>See your teammate work in realtime</h3>
      <WorkTabs items={items}/>
      <WorkCarousel items={items} />
    </div>
  )
}
