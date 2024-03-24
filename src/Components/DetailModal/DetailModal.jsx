import React, { useEffect } from 'react'
import styles from './DetailModal.module.css'

const DetailModal = ({ show, setShowDetails, movie, setMovie }) => {

  useEffect(() => {


    return () => {
      setMovie(undefined)
    }
  }, [])


  return (
    <>
      {
        show && movie ?
          <div className={styles.card}>
            <button className={styles.dismiss} type="button" onClick={() => setShowDetails(false)}>×</button>
            <h1>{movie.title}</h1>
            <div className={styles.header}>
              <img className={styles.img} src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt="" />
             
              <div className={styles.actions}>
              <h3>Descripción</h3>
              <p>{movie.overview}</p>
              <h3>Calificación</h3>
              <p>{movie.vote_average}/10</p>
              </div>
            </div>
          </div>
          :
          null
      }
    </>

  )
}

export default DetailModal
