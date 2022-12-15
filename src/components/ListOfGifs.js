import React, { useEffect, useState } from "react";
import Gif from "./Gif";
import getGifs from "../services/getGifs";

export default function ListOfGifs({ params }) {
  // console.log(props);

  const { keyword } = params;

  const [loading, setLoading] = useState(false)

  const [gifs, setGifs] = useState([])

  useEffect(function () {
    setLoading(true)
      getGifs({ keyword })
      .then((gifs) =>
      setGifs(gifs),
      setLoading(false),
    )
  
  },[keyword])

  if (loading) return <i>Cargando...</i>;
  

  return (
    <>
      {gifs.map(({ id, title, url }) => (
        <Gif key={id} title={title} url={url} id={id}></Gif>
      ))}
    </>
  );
}
