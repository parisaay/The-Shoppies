import React, { useState } from 'react';
import SearchBox from './searchForm';
import {ToastContainer,toast} from 'react-toastify'
import Pagination from './pagination';
import axios from "axios";
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
import {paginate} from './paginate'




function App(props){

const [movies,setMovies]=useState([]);
const [nominates,setNomminates]=useState([]);
const [searchedMovie,setSearchedMovie]=useState("");
const [pageSize]=useState(4)
const [currentPage,setCurrentPage]=useState(1)

const count=movies.length
const paginatedmovies=paginate(pageSize,movies,currentPage)

const handleRemove=nominate=>{
  
  const filterednominates=nominates.filter(p=>p.imdbID!==nominate.imdbID);
  
  setNomminates(filterednominates)
};

const handleNominate=movie=>{

  if( nominates.length>=5){
    
    toast.error("All nominees have been chosen! ")
  }
  
  else{
    const newNominates=[...nominates,movie]
    if(newNominates.length===5){
      toast.info("You have chosen all your five nominees! ")
    
    }
  
  
  setNomminates(newNominates)
  
  };
}
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
  if (count===0)
  return;
  return <div>
  <p>Result for {searchedMovie}: Found {count} movies</p>
 
  
  <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Year</th>
        <th>Nominate</th>
      </tr>
    </thead>
    
    
    <tbody>
          
          {paginatedmovies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>
                <button
                  disabled= {validate(movie)}
                  className="btn btn-info btn-sm"
                  onClick={()=>handleNominate(movie)}
                >
                  Nominate
                </button>
              </td>
            </tr>
          ))}
        </tbody>
  </table>
  
  
  

  </div>
 
  
}

const handleSearch=async e=>{
  const originalMovies=movies
     const searchedTitle=e.currentTarget.value
     setSearchedMovie(searchedTitle)
     const basicUrl=`http://www.omdbapi.com/?apikey=bb1928f5&s=${searchedTitle}&type=movie`
     
     try{
      const {data:foundmovies}= await axios.get(basicUrl)
      if(foundmovies.Response === "True")
      {
      setMovies(foundmovies.Search)
    }
    else
    {
      
      setMovies([])

    }

     }
    
     catch(ex)
     {
      setMovies(originalMovies)
     }


     
  }

const validate=movie=>{
  const nominated=nominates.filter(m=>m.imdbID===movie.imdbID)
  
  if (nominated.length!==0)
   return true;
  return false;
}

const handlePageChange=page=>{
  
  setCurrentPage(page)
  
}
 

  return (
    <div>
    <ToastContainer/>  
    <SearchBox value={searchedMovie}  onChange={handleSearch} />
    <div className="row">
    <div className="col-5">
    {renderTable()}
    <div>{count>0 ? (<Pagination   pageSize={pageSize} moviesCount={count}  currentPage={currentPage} onPageChange={handlePageChange}  />) : null } </div>
    
     
    </div>
    
    <div className="col+6">
      <p>Nominations</p>
    {renderNominate()}
    </div>
    </div>
     </div>)
}

export default App;
