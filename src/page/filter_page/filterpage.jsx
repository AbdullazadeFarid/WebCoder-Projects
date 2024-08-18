
  import React, { useState } from 'react';
  import "./filterpage.css";
  import { BsSortDownAlt } from "react-icons/bs";
  import { RiArrowDropDownLine } from "react-icons/ri";
  import Dropdown from '../../components/droptown/dropdown';
  import Products from '../../components/products/products';
  import slide1 from "../../assets/sliderimg/Rectangle 109.png";
  import slide2 from "../../assets/sliderimg/Rectangle 110.png";
  import slide3 from "../../assets/sliderimg/Rectangle 111.png";
  import slide4 from "../../assets/sliderimg/Rectangle 112.png";
  import Category from '../../components/category/category';

  const Filterproducts = () => {
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

    const filter = [
      { id: 11, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide1, category: "SOFAS" },
      { id: 22, title: 'Grayson Premium Grey Wash Nest of Tables', imgSrc: slide2, category: "BEDS AND HEADBOARDS" },
      { id: 33, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide3, category: "RUGS" },
      { id: 44, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide4, category: "CUSHIONS" },
      { id: 55, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide2, category: "HEADBOARDS" },
      { id: 66, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide1, category: "SOFAS" },
      { id: 77, title: 'Grayson Premium Grey Wash Nest of Tables',price: '150$', imgSrc: slide3, category: "HEADBOARDS" },
    ];

    const categories = [
      { id: 1, content: 'All' },
      { id: 2, content: 'SOFAS' },
      { id: 3, content: 'BEDS AND HEADBOARDS' },
      { id: 4, content: 'RUGS' },
      { id: 5, content: 'CUSHIONS' },
    ];

    const collections = [
      { id: 10, content: 'Collection 1' },
      { id: 20, content: 'Collection 2' },
      { id: 30, content: 'Collection 3' },
    ];



    return (
      <>
        <div className='cont'>
          <div className='filterpage'>
            <div className='filterpage_title'>
              <h2 className='filterpage_title_tit'>Home</h2>
              <div className='filterpage_title_line'></div>
              <h2 className='filterpage_title_search'>Products</h2>
            </div>

            <h2 className='filterpage_title'>Products</h2>

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
                filter
                :
                filter.filter(item => activeCategories.includes(item.category))} />
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Filterproducts;

