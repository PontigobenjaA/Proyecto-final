import React, { useEffect, useState } from 'react'
import styles from './NowPlaying.module.css';
import CardContainer from '../../Components/CardContainer/CardContainer';
import { DataProvider } from '../../Utils/DataProvider'
import Loader from '../../Components/Loader/Loader';
import Pagination from '../../Components/Pagination/Pagination';
import DetailModal from '../../Components/DetailModal/DetailModal';

const NowPlaying = () => {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [maxpage, setMaxPage] = useState(1)
  const [showDetails, setShowDetails] =useState(false)
  const [movie, setMovie]= useState()

  const getmovies = () => {
    setLoading(true)
    DataProvider.getNowPlayingMovies(page)
      .then((res) => {
        setMovies(res.results)
        setMaxPage(res.total_pages<=500?res.total_pages: 500)
      })
      .catch(err => {
        console.log(err)
        alert('Error al cargar las peliculas')
      })
      .finally(() => setLoading(false))
  }
  useEffect(() => {
    getmovies(page)
  }, [page])
  return (
    <div className={styles.container}>
      <h1>Ahora las más recientes</h1>
      {
        loading ?
          <Loader />
          :
          <CardContainer movies={movies}  setShowDetails={setShowDetails} setMovie={setMovie}/>
      }
      <Pagination page={page} setPage={setPage} maxPage={maxpage} />
      <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
    </div>
  )
}

export default NowPlaying
