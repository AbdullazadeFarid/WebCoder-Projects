


import React, { useEffect, useState } from 'react'
import "./products_page.css"
import { useLocation } from 'react-router';
import Dropdown from '../../components/droptown/dropdown';
import { BsSortDownAlt } from "react-icons/bs";
 import { RiArrowDropDownLine } from "react-icons/ri";
import Category from '../../components/category/category';
import Products from '../../components/products/products';
const Productspage = () => {

  ///


  const location = useLocation();
  // console.log(location);


  const { coltitle } = location.state || {}; // Получаем coltitle из переданного состояния







  const [activeCategories, setActiveCategories] = useState(['All']);
  const [activeCollections, setActiveCollections] = useState([]);

  const [categorystate , setCategorystate] = useState(false)

  const [collectionsstate , setCollectionsstate] = useState(false)

  const categoryClick=()=>{
    setCategorystate(!categorystate)

  }

  const collectClick=()=>{
    setCollectionsstate(!collectionsstate)

  }


  const handleCategoryClick = (item) => {

    setActiveCategories(prevCategories =>
      prevCategories.includes(item.content)
        ? prevCategories.filter(category => category !== item.content)
        : [...prevCategories, item.content]
    );
  };

  const handleCollectionClick = (item) => {
    setActiveCollections(prevCollections =>
      prevCollections.includes(item.id)
        ? prevCollections.filter(collectionId => collectionId !== item.id)
        : [...prevCollections, item.id]
    );
  };

  const sortOptions = ["POPULAR FIRST", "CHEAPEST FIRST", "EXPENSIVE FIRST"];


  const categories = [
    { id: 1, content: 'All' },
    { id: 2, content: 'SOFAS' },
    { id: 3, content: 'BEDS AND HEADBOARDS' },
    { id: 4, content: 'RUGS' },
    { id: 5, content: 'CUSHIONS' },
  ];

  const collections = [
    { id: 10, content: 'ALL' },
    { id: 20, content: 'BEDROOM' },
    { id: 30, content: 'LIVING ROOM' },
    { id: 31, content: 'KITCHEN' },
    { id: 32, content: 'LIBRARY' },
    { id: 33, content: 'OFFICE' },
    { id: 34, content: 'LAUNDRY ROOM' },
    { id: 35, content: 'GUEST ROOM' },
    { id: 36, content: 'FAMILY ROOM' },
    { id: 37, content: 'BATHROOM' },




  ];




  ///

  const [productss, setProductss] = useState([]);

  useEffect(() => {
    const fetchDataProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/categories");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setProductss(data);

      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchDataProducts();

  }, []);

  return (
    <>

    <div className='cont'>
        <div className='filterpage'>

          {
            coltitle
            ?
            <div className='filterpage_title'>
            <h2 className='filterpage_title_tit'>Home</h2>
            <div className='filterpage_title_line'></div>
            <h2 className='filterpage_title_tit'>Collections</h2>
            <div className='filterpage_title_line'></div>
            <h2 className='filterpage_title_search'>{coltitle}</h2>
          </div>
          :
          <div className='filterpage_title'>
            <h2 className='filterpage_title_tit'>Home</h2>
            <div className='filterpage_title_line'></div>
            <h2 className='filterpage_title_search'>Products</h2>
          </div>

          }

          <h2 className='filterpage_title'>
          {coltitle ? `${coltitle} ` : 'PRODUCTS'}

          </h2>

          <div className='filterpage_bottom'>
            <p className='filterpage_bottom_desc'>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </p>

            <Dropdown
              btnname="Sort By"
              icon={<BsSortDownAlt size="24px" color='rgba(184, 146, 106, 1)' />}
              options={sortOptions}
            />
          </div>
        </div>

        <div className='filterpage_main'>
          <div className='filterpage_main_filter'>
            <div className='filterpage_main_filter_category'>
              <h2 onClick={categoryClick}>Category</h2>

              <div className={`filterpage_main_filter_category_items ${categorystate ? "show" : ""}`}>
              {
                categories.map((item, index) => (
                  <div key={index} onClick={() => handleCategoryClick(item)}>
                    <Category
                      isActive={activeCategories.includes(item.content)}
                      items={item.content} />
                  </div>
                ))
              }
              </div>

            </div>

            <div className='filterpage_main_filter_collections'>
              <h2 onClick={collectClick} >COLLECTIONS</h2>
              <div className= { `filterpage_main_filter_collections_items ${collectionsstate ? "showcollect" : ""}`}
>

              {
                collections.map((item, index) => (
                  <div key={index} onClick={() => handleCollectionClick(item)}>
                    <Category
                      isActive={activeCollections.includes(item.id)}
                      items={item.content} />
                  </div>
                ))
              }

             </div>

            </div>
          </div>

          <div className="filter_products">
            <Products products={activeCategories.includes("All")
              ?
              productss
              :
              productss.filter(item=>
                activeCategories.includes(item.title)
              ) } />

          </div>
        </div>
      </div>


    </>
  )
}

export default Productspage















































































// import React, { useEffect, useState } from 'react';
// import "./filterpage.css";
// import { BsSortDownAlt } from "react-icons/bs";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import Dropdown from '../../components/droptown/dropdown';
// import Products from '../../components/products/products';
// import Category from '../../components/category/category';

// const Filterproducts = () => {



//   const [productss, setProductss] = useState([]);

//   useEffect(() => {
//     const fetchDataProducts = async () => {
//       try {
//         const res = await fetch("http://localhost:3004/categories");
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         const data = await res.json();
//         setProductss(data);  // Сохраняем данные в состоянии

//       } catch (error) {
//         console.error("Ошибка при выполнении запроса:", error);
//       }
//     };

//     fetchDataProducts();

//   }, []);



//   const [activeCategories, setActiveCategories] = useState(['All']);
//   const [activeCollections, setActiveCollections] = useState([]);

//   const [categorystate , setCategorystate] = useState(false)

//   const [collectionsstate , setCollectionsstate] = useState(false)

//   const categoryClick=()=>{
//     setCategorystate(!categorystate)

//   }

//   const collectClick=()=>{
//     setCollectionsstate(!collectionsstate)

//   }


//   const handleCategoryClick = (item) => {

//     setActiveCategories(prevCategories =>
//       prevCategories.includes(item.content)
//         ? prevCategories.filter(category => category !== item.content)
//         : [...prevCategories, item.content]
//     );
//   };

//   const handleCollectionClick = (item) => {
//     setActiveCollections(prevCollections =>
//       prevCollections.includes(item.id)
//         ? prevCollections.filter(collectionId => collectionId !== item.id)
//         : [...prevCollections, item.id]
//     );
//   };

//   const sortOptions = ["POPULAR FIRST", "CHEAPEST FIRST", "EXPENSIVE FIRST"];


//   const categories = [
//     { id: 1, content: 'All' },
//     { id: 2, content: 'SOFAS' },
//     { id: 3, content: 'BEDS AND HEADBOARDS' },
//     { id: 4, content: 'RUGS' },
//     { id: 5, content: 'CUSHIONS' },
//   ];

//   const collections = [
//     { id: 10, content: 'Collection 1' },
//     { id: 20, content: 'Collection 2' },
//     { id: 30, content: 'Collection 3' },
//   ];



//   return (
//     <>
//       <div className='cont'>
//         <div className='filterpage'>
//           <div className='filterpage_title'>
//             <h2 className='filterpage_title_tit'>Home</h2>
//             <div className='filterpage_title_line'></div>
//             <h2 className='filterpage_title_search'>Products</h2>
//           </div>

//           <h2 className='filterpage_title'>Products</h2>

//           <div className='filterpage_bottom'>
//             <p className='filterpage_bottom_desc'>
//               Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
//               cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
//             </p>

//             <Dropdown
//               btnname="Sort By"
//               icon={<BsSortDownAlt size="24px" color='rgba(184, 146, 106, 1)' />}
//               options={sortOptions}
//             />
//           </div>
//         </div>

//         <div className='filterpage_main'>
//           <div className='filterpage_main_filter'>
//             <div className='filterpage_main_filter_category'>
//               <h2 onClick={categoryClick}>Category</h2>

//               <div className={`filterpage_main_filter_category_items ${categorystate ? "show" : ""}`}>
//               {
//                 categories.map((item, index) => (
//                   <div key={index} onClick={() => handleCategoryClick(item)}>
//                     <Category
//                       isActive={activeCategories.includes(item.content)}
//                       items={item.content} />
//                   </div>
//                 ))
//               }
//               </div>

//             </div>

//             <div className='filterpage_main_filter_collections'>
//               <h2 onClick={collectClick} >COLLECTIONS</h2>
//               <div className= { `filterpage_main_filter_collections_items ${collectionsstate ? "showcollect" : ""}`}
// >

//               {
//                 collections.map((item, index) => (
//                   <div key={index} onClick={() => handleCollectionClick(item)}>
//                     <Category
//                       isActive={activeCollections.includes(item.id)}
//                       items={item.content} />
//                   </div>
//                 ))
//               }

//              </div>

//             </div>
//           </div>

//           <div className="filter_products">
//             <Products products={activeCategories.includes("All")
//               ?
//               productss
//               :
//               // productss.filter(item => activeCategories==item.title)
//               productss.filter(item=>
//                 activeCategories.includes(item.title)
//               ) } />

//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Filterproducts;
