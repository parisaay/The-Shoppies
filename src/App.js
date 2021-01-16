import React, { useState } from 'react';
import Search from './searchForm';
import axios from "axios";
import './App.css';




function App(props){

  const [movies,setMovies]=useState([]);
  const [nominates,setNomminates]=useState([]);
  const [searchedMovie,setSearchedMovie]=useState("");
// state={
//   movies:[],
//   nominates:[],
//   searchedMovie:""
// };



const handleRemove=nominate=>{
  console.log(nominates)
   const filterednominates=nominates.filter(p=>p.imdbID!==nominate.imdbID);
  // this.setState({nominates})
  setNomminates(filterednominates)
};

const handleNominate=movie=>{
  
  const newNominates=[...nominates,movie]


  //this.setState({nominates})
  console.log(movie)
  setNomminates(newNominates)
  
  
};

const renderNominate=()=>{
  if (nominates.length===0)
  return <p>"Nothing selected!"</p>
  
 return <ul>{nominates.map(nominate=>
 <li key={nominate.imdbID}>
   {nominate.Title} {nominate.Year}
   <button
  className="btn btn-info btn-sm"
  onClick={() => handleRemove(nominate)}
 >
  Remove
 </button>
 </li>)}
 </ul>
  
}

const renderTable=()=>{
  if (movies.length==0)
  return;
  return <div className="row">
  <div className="col-5">
   <div>
    Found { movies.length} movies 
 </div> 
  
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Nominate</th>
      </tr>
    </thead>
    
    
    <tbody>
          
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>
                <button
                  className="btn btn-info btn-sm"
                  onClick={() => handleNominate(movie)}
                >
                  Nominate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
  </div>
  <div className="col+6"></div>
  <div>
    <p>Result for ram</p>
    
    {renderNominate()}
  </div>

  </div>
 
  
}

const handleSearch=async e=>{
  const originalMovies=movies
     const searchedTitle=e.currentTarget.value
     setSearchedMovie(searchedTitle)
     const basicUrl=`http://www.omdbapi.com/?apikey=bb1928f5&s=${searchedTitle}&type=movie`
     console.log(basicUrl)
     try{
      const {data:foundmovies}= await axios.get(basicUrl)
      if(foundmovies.Response === "True")
      {console.log('if',movies)
      setMovies(foundmovies.Search)
    }
    else
    {
      console.log('else',movies) 
      setMovies([])

    }

     }
    
     catch(ex)
     {
      setMovies(originalMovies)
     }
//console.log('foundmovies',foundmovies.Search)

     
  }

//  const handleApiCall= async()=>{
// const basicUrl=`http://www.omdbapi.com/?apikey=bb1928f5&s=${searchedMovie}&type=movie`
//  const {data:movies}= await axios.get(basicUrl)
// console.log(searchedMovie)
// setMovies(movies.Search)
//  }


 
  return (
    <div>
       
    <Search value={searchedMovie}  onChange={handleSearch} />
    
    {renderTable()}
    
  {/* <div className="row">
    <div className="col-5">
     <div>
      Found {count} movies 
   </div> 
    
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Nominate</th>
        </tr>
      </thead>
      
      
      <tbody>
            
            {movies.map((movie) => (
              <tr key={movie.imdbID}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleNominate(movie)}
                  >
                    Nominate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
    </table>
    </div>
    <div className="col+6"></div>
    <div>
      <p>Result for ram</p>
      
      {renderNominate()}
    </div>

    </div>
   
     */}
    
  </div>)
}

export default App;
