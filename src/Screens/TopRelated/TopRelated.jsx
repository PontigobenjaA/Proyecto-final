import React, { useEffect, useState } from 'react'
import { DataProvider } from '../../Utils/DataProvider';
import Loader from '../../Components/Loader/Loader';
import CardContainer from '../../Components/CardContainer/CardContainer';
import Pagination from '../../Components/Pagination/Pagination';
import styles from './TopRelated.module.css'
import DetailModal from '../../Components/DetailModal/DetailModal';

const TopRelated = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1)
  const [maxpage, setMaxPage] = useState()
  const [loading, setLoading] = useState(false)
  const [showDetails, setShowDetails] =useState(false)
  const [movie, setMovie]= useState()

  const getMovies = () => {
    DataProvider.getTopMovies(page)
      .then(res => {
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
    getMovies()
  }, [page])

  return (
    <div className={styles.container}>
      <h1>Las conocidas por el mundo</h1>
      {
        loading ?
          <Loader />
          :
          <CardContainer movies={movies} setShowDetails={setShowDetails} setMovie={setMovie} />
      }
      <Pagination page={page} setPage={setPage} maxPage={maxpage} />
      <DetailModal show={showDetails} setShowDetails={setShowDetails} movie={movie} setMovie={setMovie}/>
    </div>
  )
}

export default TopRelated
