import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { useState } from "react";

export default function TypedText({texts}) {
  const [index, setIndex] = useState(0);

  const cursor = {
    show: true,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  };

  const typingDone = () => {

    index < (texts.length - 1) ? setIndex(index + 1) : setIndex(0);
  }





  return (
    <div>
    {
      texts && texts[index] ?
        <Typist key={index} cursor={cursor} startDelay={2000} onTypingDone={typingDone}>
          {texts[index]}
          <Typist.Delay  ms={4000}/>
        </Typist>
        : ''
    }
    </div>
  )
}
