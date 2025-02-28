import React, { useContext } from 'react'
import { useData } from './MovieList'
import MovieCard2 from './MovieCard2';

const MovieCard1 = () => {
    const {movies} = useContext(useData);

  return (
    <div>
      <table>
        <caption>Movie List</caption>
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
                    <td>{ movie.name }</td>
                    <td>{ movie.movie }</td>
                    <td>{ movie.director }</td>
                    <td></td>
                    <td></td>
                </tr>
            ))}
        </tbody>
      </table>
      <MovieCard2/>
    </div>
  )
}

export default MovieCard1
