import { useState, useEffect } from "react";
import Movie from './Movie.jsx'
import Accueil from './Accueil.jsx'

export default function App() {

  const [Page, setPage] = useState("accueil");

  if (Page == "accueil") {
    return (
      <Accueil setPage={setPage}/>
    )
  }

  else if (Page == "serie") {
    return (
      <Movie idserie={1} setPage={setPage}/>
    )
  }
}