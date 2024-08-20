import React from 'react'
import "./productsInfo.css";
import img from '../../assets/sliderimg/Rectangle 123.png';
import Button from '../../components/button/button';

const ProductsInfo = () => {
  return (

    <>

<div className="cont">
      <div className="product_info">
        <div className="products_info_title">
          <h2 className='products_info_title_tit'>Home</h2>
          <div className="products_info_title_line"></div>
          <h2 className='products_info_title_tit'>Products</h2>
          <div className="products_info_title_line"></div>
          <h2 className='products_info_title_next'>Grayson Premium Grey Wash Nest of Tables</h2>
        </div>

        <div className='product_info_cont'>
          <div className='product_info_cont_left'>
            <div className="product_info_cont_left_top">
              <img src={img} alt="Main product" />
            </div>
            <div className="product_info_cont_left_bottom">
                <div className='img_cont'>

                  <img src={img} alt="Product thumbnail" />
                </div>

                <div className='img_cont'>

                    <img src={img} alt="Product thumbnail" />
                </div>

                <div className='img_cont'>

                  <img src={img} alt="Product thumbnail" />

                 </div>

            </div>
          </div>

          <div className="product_info_cont_right">
            <h2 className='product_info_cont_right_title'>
              GRAYSON PREMIUM GREY WASH NEST OF TABLES
            </h2 >
            <p className='product_info_cont_right_desc' >
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>
            <h4 className='product_info_cont_right_c'>Colors</h4>
            <div className='product_info_cont_right_color'>
                <div className='product_info_cont_right_color_green colorbtn'></div>
                <div className='product_info_cont_right_color_black colorbtn'></div>
                <div className='product_info_cont_right_color_orange colorbtn'></div>

            </div>

            <div className='product_info_cont_right_decriment'>
                <div className='product_info_cont_right_decriment_element'>+</div>
                <div className='product_info_cont_right_decriment_num'>1</div>
                <div className='product_info_cont_right_decriment_element'>-</div>

            </div>

            <h2 className='product_info_cont_right_price'>140$</h2>

            <div className='btn'>

                <Button text="BUY NOW" className="productsinfp_classname" />
                <Button text="ADD TO CART" className="productsinfp_classname_transparent"/>
            </div>
          </div>
        </div>


        <div className='product_info_similar'>




   {/* SIMILAR           DAVAMM ELEEEE */}



        </div>
      </div>
    </div>
    </>
  )
}

export default ProductsInfo