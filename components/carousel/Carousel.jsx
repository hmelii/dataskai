import { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useWindowSize from "../../hooks/UseWindowResize";
import LightboxComponent from "../lightbox-component/LightboxComponent";
import AsciinemaPlayer from "../asciinema-player/AsciinemaPlayer";


function CarouselTabs({ items, currentIndex, tabClick }) {

  return (
    <ul className={styles.carouselTabs}>
      {items.map((tab, index) => <CarouselTabsItem tab={tab} active={currentIndex === index} tabClick={tabClick} index={index} key={tab.id}/>)}
    </ul>
  )
}

function CarouselTabsItem({ tab, active, index, tabClick }) {
  const handleTabClick = (index) => {
    tabClick(index)
  }
  return (
    <li className={styles.carouselTabsItem}>
      <a className={`${styles.carouselTabsLink} ${active ? styles.carouselTabsLinkActive : ''}`} onClick={() => handleTabClick(index)}>{tab.title}</a>
    </li>
  )
}

function CarouselItem({ item, imageClick }) {
  return (
    <div className={styles.carouselItem}>
      <div className={styles.carouselFig}>
        {item.preview ? <a className={styles.carouselLink} onClick={() => imageClick(item.image)}><img className={styles.carouselImg} src={item.preview} alt={item.title}/></a>  : item.html ? <div className={styles.carouselMedia} dangerouslySetInnerHTML={{ __html: item.html }}/> : item.asciicinema ? <div className={styles.carouselAscii}><AsciinemaPlayer src={ item.asciicinema } /></div> : ''}
      </div>
      <div className={styles.carouselContext}>
        <div className={styles.carouselTitle}>
          {item.title}
        </div>
        <div className={styles.carouselSummary} dangerouslySetInnerHTML={{ __html: item.summary }}>
        </div>
      </div>
    </div>
  );
}

function CarouselItems({ items, handleChangeCurrentIndex, clickedTabIndex, imageClick }) {
  const slider = useRef(null);
  const [variableWidth, setVariableWidth] = useState(false);
  const [widthWidth] = useWindowSize();

  useEffect(() => {
    setVariableWidth(widthWidth < 768);
  }, [widthWidth]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    variableWidth: variableWidth,
    beforeChange: (current, next) => {
      handleChangeCurrentIndex(next)
    }
  };

  useEffect(() => {
    if (clickedTabIndex !== null) {
      slider.current.slickGoTo(clickedTabIndex)
    }
  }, [clickedTabIndex]);


  return (
    <Slider
      ref={slider}
      {...settings}
    >
      {items.map(slide => <CarouselItem item={slide} key={slide.id} imageClick={imageClick}/>)}
    </Slider>
  )
}

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedTabIndex, setClickedTabIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const handleChangeCurrentIndex = index => setCurrentIndex(index);

  const tabClick = (index) => {
    setClickedTabIndex(index);
  }

  const imageClick = (image) => {
    setImages([image]);
    setIsOpen(true);
  }

  const closeClick = () => {
    setIsOpen(false)
  }

  return (
    <>
      <div className={styles.carousel}>
        <CarouselTabs items={items} currentIndex={currentIndex} tabClick={tabClick}/>
        <CarouselItems items={items} handleChangeCurrentIndex={handleChangeCurrentIndex} clickedTabIndex={clickedTabIndex} imageClick={imageClick}/>
      </div>
      <LightboxComponent images={images} isOpen={isOpen} closeClick={closeClick}/>
    </>
  )
}
