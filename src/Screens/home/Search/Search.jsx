import React, {  useState } from 'react'
import styles from './Search.module.css'
import Loader from '../../../Components/Loader/Loader'
import Pagination from '../../../Components/Pagination/Pagination'
import DetailModal from '../../../Components/DetailModal/DetailModal'
import { DataProvider } from '../../../Utils/DataProvider'
import CardContainer from '../../../Components/CardContainer/CardContainer'

const Search = () => {
    const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const [maxpage, setMaxPage] = useState(1)
  const [showDetails, setShowDetails] =useState(false)
  const [movie, setMovie]= useState()
  const [tetx, setText]= useState('')

  const getmovies = () => {
    setLoading(true)
    DataProvider.getMoviesByName(page, tetx)
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

const handleClick =() =>{
   if (tetx.length >=3) 
     getmovies()
    else alert('Ingresar un texto mayor a 3 caracteres')
   
}

const handleKeyDown =(e)=>{
     if(e.key === 'Enter'){
        if (tetx.length >=3) 
        getmovies()
       else alert('Ingresar un texto mayor a 3 caracteres') 
     }
}



  return (
    <div className={styles.container}>
      <h1>Este es el momento de encontrar tu peliculas favotitas</h1>
      <div className={styles.inputContainer}>
      <input type="text" className={styles.input} placeholder='Escribe....' 
      onChange={(e)=>setText(e.target.value)} value={tetx} onKeyDown={(e) => handleKeyDown(e)}/>
      <i className={`fas fa-search ${styles.searchIcon}`}></i>
      <button  className={styles.btn} onClick={handleClick}>Buscar</button>
    </div>
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

export default Search
