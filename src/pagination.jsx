import React from 'react';
import _ from 'lodash';

const Pagination = (props) => {
   
 const { pageSize, moviesCount,onPageChange,currentPage }=props
 
 const totalPage=moviesCount/pageSize
  
 const pages= _.range(1,totalPage+1);

    


    return ( 
    <nav>
        <ul className="pagination">
            {pages.map(page => (
                <li  key={page}  className={ page===currentPage ? "page-item active" : "page-item"} >
                  <a className="page-link" onClick={()=>onPageChange(page)}>{page}</a>
                </li>
            ))}
            
        </ul>
    </nav> );
}
 
export default Pagination;