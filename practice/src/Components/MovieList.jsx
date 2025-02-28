import React, { createContext } from 'react'
import MovieCard1 from './MovieCard1';
import './Style.css'
const useData = createContext();
const MovieList = () => {
    const movieList = [
        {slno: "1", name: "Mahesh Babu", movie: "Maharshi",  director: "Vamshi Paidipally", releaseYear: "2019", image: "/Images/Maharshi.jpg", id:1},
        {slno: "2", name: "N.T.R", movie: "Devara",  director: "Koratala Siva", releaseYear: "2024", image: "/Images/Devara.jpg", id:2},
        {slno: "3", name: "Allu Arjun", movie: "Pushpa 2:The Rule",  director: "Sukumar", releaseYear: "2024", image: "/Images/Pushpa_2.jpg", id:3},
        {slno: "4", name: "Nani", movie: "Jersey",  director: "Gowtam Tinnanuri", releaseYear: "2022", image: "/Images/Jersey.jpg", id:4},
        {slno: "5", name: "Nani", movie: "Hi Nanna",  director: "Shouryuv", releaseYear: "2023", image: "/Images/Hi_Nanna.jpg", id:5},
        {slno: "6", name: "Ram Charan", movie: "Rangasthalam",  director: "Sukumar", releaseYear: "2018", image: "/Images/Rangasthalam.jpg", id:6},
        {slno: "7", name: "Prabhas", movie: "Salaar: Part 1 – Ceasefire",  director: "Prashanth Neel", releaseYear: "2023", image: "/Images/Salaar.jpg", id:7},
        {slno: "8", name: "Prabhas", movie: "Kalki 2898 AD",  director: "Nag Ashwin", releaseYear: "2024", image: "/Images/Kalki.jpg", id:8},
        {slno: "9", name: "Yash", movie: "KGF: Chapter 2",  director: "Prasanth Neel", releaseYear: "2022", image: "/Images/KGF2.jpg", id:9},
        {slno: "10", name: "Ravi Teja", movie: "Krack",  director: "Gopichand Malineni", releaseYear: "2021", image: "/Images/Krack.jpg", id:10},
    ]
  return (
    <div>
      <useData.Provider value={{movies:movieList}}>
        <MovieCard1/>
      </useData.Provider>
    </div>
  )
}

export default MovieList
export {useData}
