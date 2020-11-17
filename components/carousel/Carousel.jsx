import {useState, useRef, useEffect} from 'react';
import styles from './Carousel.module.scss';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function CarouselTabs({ items, currentIndex, tabClick }) {

  return (
    <ul className={styles.carouselTabs}>
      {items.map((tab, index) => <CarouselTabsItem tab={tab} active={currentIndex===index} tabClick={tabClick} index={index} key={tab.id} />)}
    </ul>
  )
}

function CarouselTabsItem({ tab, active, index, tabClick }) {
  const handleTabClick = (index) => {
    tabClick(index)
  }
  return (
    <li className={styles.carouselTabsItem}>
      <a className={`${styles.carouselTabsLink} ${active?styles.carouselTabsLinkActive:''}`} onClick={() => handleTabClick(index)}>{tab.title}</a>
    </li>
  )
}

function CarouselItem({ item }) {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.carouselFig}>
        <img className={styles.carouselImg} src={item.preview} alt={item.title} />
      </div>
      <div className={styles.carouselContext}>
        <div className={styles.carouselTitle}>
          {item.title}
        </div>
        <div className={styles.carouselSummary}>
          {item.summary}
        </div>
      </div>
    </div>
  );
}

function CarouselItems({ items, handleChangeCurrentIndex, clickedTabIndex }) {
  const slider = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => {
      handleChangeCurrentIndex(next)
    }
  };

  useEffect(() => {
    if (clickedTabIndex !== null) {
      console.log(slider, clickedTabIndex)
      slider.current.slickGoTo(clickedTabIndex)
    }
  }, [clickedTabIndex])


  return (
    <Slider
      ref={slider}
      {...settings}
    >
      { items.map(slide => <CarouselItem item={slide} key={slide.id} />) }

    </Slider>
  )
}

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedTabIndex, setClickedTabIndex] = useState(null);

  const handleChangeCurrentIndex = index => setCurrentIndex(index);

  const tabClick = (index) => {
    setClickedTabIndex(index)
  }

  return (
    <div className={styles.carousel}>
      <CarouselTabs items={items} currentIndex={currentIndex} tabClick={tabClick}/>
      <CarouselItems items={items} handleChangeCurrentIndex={handleChangeCurrentIndex} clickedTabIndex={clickedTabIndex} />
    </div>
  )
}
