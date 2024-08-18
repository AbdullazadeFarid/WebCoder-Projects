import React, { useContext } from 'react'
import "./search_results.css"
// import Products from '../../components/products/products'
import { SearchContext } from '../../context/context';
import slide1 from "../../assets/sliderimg/Rectangle 109.png"
import Products from '../../components/products/products';


const Search_results = () => {
  const searchresult = [
    { id: 1, content: 'Sofas',imgSrc: slide1 },
    { id: 2, content: 'Bed',imgSrc: slide1 },
    { id: 3, content: 'Rugs',imgSrc: slide1 },
    { id: 4, content: 'Headboards',imgSrc: slide1 },
    { id: 5, content: 'Liabrary',imgSrc: slide1 },
    { id: 6, content: 'Kitchen',imgSrc: slide1 },
    { id: 7, content: 'Bathroom',imgSrc: slide1 },
  ];

  const { inp, setInp } =useContext(SearchContext)

  const filteredResults = searchresult.filter((item) =>
    item.content.toLowerCase()==inp.toLowerCase()
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
           <Products products={filteredResults}  />

        </div>
      </div>
    </div>
    </>
  )
}

export default Search_results