import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { useState } from "react";

export default function LightboxComponent({ images, isOpen, closeClick }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  return (
    <div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
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
