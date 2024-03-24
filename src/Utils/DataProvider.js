const headers = {
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjE1MWY2YzRkNGRjOTBhZjZjY2U4NmMyOTRmYzI1ZiIsInN1YiI6IjY1ZjIxZWJmNDcwZWFkMDBjYjliNjgyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tp7_BWMDIdq14uYJua0Brjlv5l-WxoTYeQrK-dDzPN0`
}
export const DataProvider = {
    getNowPlayingMovies: async (page = 1) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('hubo un error al encontar las peliculas')
        }

    },
    getPopularMovies: async(page = 1)=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('hubo un error al encontar las peliculas')
        }
    },
    getTopMovies: async(page = 1)=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('hubo un error al encontar las peliculas')
        }
    },
    getUpComing: async(page = 1)=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('hubo un error al encontar las peliculas')
        }
    },
    getMoviesByName: async(page = 1, name)=>{
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=es&page=${page}`, { headers: headers })
            const movies = await response.text()
            return JSON.parse(movies)
        } catch (error) {
            alert('hubo un error al encontar las peliculas')
        }
    }

}
