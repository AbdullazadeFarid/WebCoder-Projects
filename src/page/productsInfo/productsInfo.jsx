
import React, { useEffect, useState } from 'react'
import "./productsInfo.css";
import Button from '../../components/button/button';
import { useParams } from 'react-router';
import { getProductById } from '../../services/product.service';
import Collectionpage from '../collection_page/collection';
// import Slider from '../../components/slider/slider';

const ProductsInfo = () => {
  const { id } = useParams();
  const [productss, setProductss] = useState({});
  const [similar, setSimilar] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {   //Similar Ucun
    const fetchDataProducts = async () => {
      try {
        const res = await fetch("http://localhost:3004/products");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setSimilar(data);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchDataProducts();
  }, []);

  useEffect(() => {
    const fetchDataProductById = async () => {
      try {
        const res = await getProductById(id);
        setProductss(res);
      } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
      }
    };

    fetchDataProductById();
  }, [id]);

  const addToCart = () => {
    const newItem = {
      id: productss.id,
      title: productss.title,
      image: productss.image,
      price: productss.price,
      count: count
    };

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log("aasas");



    cartItems.push(newItem);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert(`${productss.title} səbətə əlavə olundu`);
  };

  return (
    <div className="cont">
      <div className="product_info">
        <div className="products_info_title">
          <h2 className='products_info_title_tit'>Home</h2>
          <div className="products_info_title_line"></div>
          <h2 className='products_info_title_tit'>Products</h2>
          <div className="products_info_title_line"></div>
          <h2 className='products_info_title_next'>{productss.title}</h2>
        </div>

        <div className='product_info_cont'>
          <div className='product_info_cont_left'>
            <div
              style={{ backgroundImage: `url(${productss.image})` }}
              className='product_info_cont_left_top'
            ></div>
            <div className="product_info_cont_left_bottom">
              <div
                style={{ backgroundImage: `url(${productss.image})` }}
                className='img_cont bottom'
              ></div>
              <div
                style={{ backgroundImage: `url(${productss.image})` }}
                className='img_cont center'
              ></div>
              <div
                style={{ backgroundImage: `url(${productss.image})` }}
                className='img_cont right'
              ></div>
            </div>
          </div>

          <div className="product_info_cont_right">
            <h2 className='product_info_cont_right_title'>{productss.title}</h2 >
            <p className='product_info_cont_right_desc'>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
            <h4 className='product_info_cont_right_c'>Colors</h4>
            <div className='product_info_cont_right_color'>
              <div className='product_info_cont_right_color_green colorbtn'></div>
              <div className='product_info_cont_right_color_black colorbtn'></div>
              <div className='product_info_cont_right_color_orange colorbtn'></div>
            </div>

            <div className='product_info_cont_right_decriment'>
              <div onClick={() => { count > 1 && setCount(count - 1) }} className='product_info_cont_right_decriment_element'>-</div>
              <div className='product_info_cont_right_decriment_num'>{count}</div>
              <div onClick={() => setCount(count + 1)} className='product_info_cont_right_decriment_element'>+</div>
            </div>

            <h2 className='product_info_cont_right_price'>
              {count <= 0 ? 1 : productss.price * count}$
            </h2>

            <div className='btn'>
              <Button text="BUY NOW" className="productsinfp_classname" />
              <Button click={addToCart} text="ADD TO CART" className="productsinfp_classname_transparent"  />
            </div>
          </div>
        </div>

        <div className='product_info_cont_similar'>
          <h2 className='similar_title'>SIMILAR PRODUCTS</h2>
          {/* <Slider slides={similar} /> */}
          <Collectionpage
        type={true}
        />
        </div>
      </div>
    </div>
  )
}

export default ProductsInfo;
