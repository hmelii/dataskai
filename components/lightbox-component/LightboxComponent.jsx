import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState, useEffect } from "react";
import useWindowSize from "../../hooks/UseWindowResize";

export default function LightboxComponent({ images, isOpen, closeClick }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [widthWidth] = useWindowSize();
  const [variableWidth, setVariableWidth] = useState(false);


  useEffect(() => {
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('ril__image')) {
        closeClick();
      }
    })
  }, []);


  useEffect(() => {
    setVariableWidth(widthWidth < 768);
  }, [widthWidth]);

  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          enableZoom={true}
          imagePadding={variableWidth ? 10 : 100}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => closeClick()}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div>
  )
}
