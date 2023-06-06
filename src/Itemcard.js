import React from 'react'
import {useCart} from "react-use-cart";

const Itemcard = (props) => {
    const cardStyle = {
        width: '300px',

    
       
      };
    const {addItem} =useCart();
    return(
       
          <div className="col-11 col-md-6 col-lg-3 mx-0  mb-4 ms-0">
                <div class="card p-0 overflow-hidden h-100 shadow" style={cardStyle} >
                     <img src={props.img} class="card-img-top img-fluid"  />
                        <div class="card-body text-center">
                            <h5 class="card-title">{props.title}</h5>
                            <h5 class="card-title">${props.price}</h5>
                            <p class="card-text">{props.desc}</p><br></br>
                            <button class="btn btn-dark rounded-pill mycart" onClick={() => addItem(props.item)}>&nbsp;<i class="fa-solid fa-basket-shopping"></i> &nbsp; Add to Basket&nbsp; </button>
                        </div>
                </div>
          </div>

          

   
        );
};

export default Itemcard;