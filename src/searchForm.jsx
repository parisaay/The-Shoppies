import React from 'react';

const SearchBox =({value,onChange}) =>
   

     { 
        return ( 
        
        <form >
        <div className="form-group col-2">
        <label htmlFor="search" className="form-label">Movie Title</label>
         <input 
         className="form-control "
          type="text" 
          name="search" 
          value={value}
          onChange={onChange}
          placeholder="Type to search..." autoFocus/> 
            </div>
        
         </form>
         );
    }

 
export default SearchBox;