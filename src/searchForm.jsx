import React from 'react';

const SearchBox =({value,onChange}) =>
   

     { 
        return ( 
        
          <form id="dashboard-form" onSubmit={(e)=> e.preventDefault()}>
         <div  id="form" className="form-group ">
        <label htmlFor="search" className="form-label" style={{fontWeight:"bold",fontSize:"20px",color:"rebeccapurple"}}>Movie Title</label>
         <input
          autoFocus
          className="form-control"
          type="text" 
          name="search" 
          value={value}
          onChange={onChange}
          placeholder="Type to search..." /> 
            </div>
        
         </form>
         );
    }

 
export default SearchBox;