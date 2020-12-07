import React, { useEffect, useRef } from "react";

export default function AsciinemaPlayer({ src }) {
  const asciicinemaRef = useRef(null);

  useEffect(() => {

    if (typeof window === 'undefined') {
      return
    }

    asciinema.player.js.CreatePlayer(
      asciicinemaRef.current,
      src,
      {
        theme: 'monokai',
        idleTimeLimit: 2,
        poster: 'npt:0:3',
        cols: 60,
        rows: 18,
        loop: true
      }
    );
  }, []);

  return (
    <divr ref={asciicinemaRef} />
  )
}
