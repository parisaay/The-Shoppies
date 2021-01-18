import React, { useState,useEffect } from 'react';
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
  localStorage.removeItem(nominate.imdbID)
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
  console.log(newNominates)
  for (let i=0;i<newNominates.length;i++){
    localStorage.setItem(newNominates[i].imdbID,`${newNominates[i].Year}-${newNominates[i].Title}`)
    
    
    };
  
  };
}
const renderNominate=()=>{

  if (nominates.length===0)
  return <p style={{fontSize: "17px",fontWeight:"lighter",color:"darkblue"}}>Nothing selected!</p>
  
 return <ul className="list-group">{nominates.map(nominate=>
 <li key={nominate.imdbID} className="list-group-item d-flex justify-content-between align-items-center">
   {nominate.Title} {nominate.Year}
   <button
  className="btn btn-sm badge badge-danger badge-pill"
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
  <p style={{fontWeight:"bold"}}>Result for {searchedMovie}: Found {count} movies</p>
 
  
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
     const basicUrl=`https://www.omdbapi.com/?apikey=bb1928f5&s=${searchedTitle}*&type=movie`
     
     try{
      const {data:foundmovies}= await axios.get(basicUrl)
      if(foundmovies.Response === "True")
      {
      setMovies(foundmovies.Search)
    }
    else
    {
      
      setMovies([])
      setCurrentPage(1)

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
 
useEffect(()=>{
let  values = [],
        keys = Object.keys(localStorage),
        keyLength = keys.length;
    for(let i=0;i<keyLength;i++){
      let currentValue = localStorage.getItem(keys[i])
      let nominee = {"imdbID": keys[i], "Title": currentValue.split('-')[1], "Year"  :currentValue.split('-')[0]} 
        values.push(nominee);
    }
    console.log(values)
    setNomminates(values)

},[])


return (
  <div className="main-container">
    <ToastContainer />
    <SearchBox value={searchedMovie} onChange={handleSearch} />
    <div className="result-container">
      <div className="search-result">
        {renderTable()}
        <div>
          {count > 0 ? (
            <Pagination
              pageSize={pageSize}
              moviesCount={count}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          ) : null}
        </div>
      </div>

      <div className="nomination-list">
        <p style={{fontSize:"20px",fontWeight:'bold',color:"s"}}>Nomination List</p>
        {renderNominate()}
      </div>
    </div>
  </div>
);
}

export default App;
