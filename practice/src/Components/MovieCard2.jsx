import React, { useContext } from 'react'
import { useData } from './MovieList'

const MovieCard2 = () => {
    const {movies} = useContext(useData);

  return (
    <div>
        <table>
            <caption>Movie Poster's</caption>
            <thead>
                <tr>
                    <th>Sl.no</th>
                    <th>Actor Name</th>
                    <th>Movie</th>
                    <th>Director</th>
                    <th>Year</th>
                    <th>Poster</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, id)=>(
                    <tr key={id}>
                        <td>{ movie.slno }</td>
                        <td></td>
                        <td></td>
                        <td>{ movie.director }</td>
                        <td>{ movie.releaseYear }</td>
                        <td><img src={movie.image} alt="" /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default MovieCard2
