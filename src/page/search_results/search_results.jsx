



import React, { useContext } from 'react';
import { SearchContext } from '../../context/context';
import Products from '../../components/products/products';
import "./search_results.css";

const Search_results = () => {
  const { inp, searchres } = useContext(SearchContext);


  console.log(searchres);

    const filteredResults = searchres.filter((item) =>
      item.title && inp ? item.title.toLowerCase().includes(inp.toLowerCase()) : false
  );

  return (
    <>
      <div className="cont">
        <div className="search_results">
          <div className='search_results_title'>
            <h3 className='search_results_title_tit'>Home</h3>
            <div className='search_results_title_line'></div>
            <h3 className='search_results_title_search'>Search results</h3>
          </div>
          <h2 className='search_results_page'>SEARCH RESULTS</h2>
          <p className='search_results_des'>Your search results for "{inp}".</p>
          <div>
            <Products products={filteredResults} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search_results;
