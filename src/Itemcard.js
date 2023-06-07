import React from 'react'
import {useCart} from "react-use-cart";

const Itemcard = (props) => {
    const cardStyle = {
        width: '300px',
border: 'none',

    
       
      };
    const {addItem} =useCart();
    return(
       
          <div className="col-11 col-md-6 col-lg-3 mx-0  mb-5 ms-0 ">
                <div class="card p-0 overflow-hidden h-100 shadow cart" style={cardStyle} >
                     <img src={props.img} class="card-img-top img-fluid"  />
                        <div class="card-body text-left">
                            <h5 class="card-title text">{props.title}</h5>
                            <h5 class="card-title text1">${props.price}</h5>
                            <p class="card-text">{props.desc}</p>
                         
                            <button class="btn btn-dark rounded-pill mycart add  " onClick={() => addItem(props.item)}><i class="fa-solid fa-basket-shopping"></i> </button><br/>
                        </div>
                </div>
          </div>

          

   
        );
};

export default Itemcard;