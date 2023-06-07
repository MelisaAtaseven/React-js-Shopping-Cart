import React from 'react'
import { useCart } from "react-use-cart";

const Cart = () => {
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } =useCart();
    if(isEmpty) return <h1 className="text-center" > your cart is empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                  
                <table className="table   m-0">   
                    <tbody>
                    {items.map((item,index) => {
                        return (
                    <tr key={index}>
                    <td>
                         <img src={item.img} style={{height:'6rem'}}/>
                    </td>
                    <td >{item.title}</td>
                    <td>{item.price}</td>
                    <td>Quantity({item.quantity})</td>
                    <td>
                        <button 
                        className="btn updatebtn btn-dark  ms-2"  style={{ borderRadius:'19px' , width:'40px'}} 
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >-</button>
                        <button 
                        className="btn  updatebtn-add btn-dark  ms-2 "style={{ borderRadius:'19px' , width:'40px'}} 
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >+</button>
                        <button 
                        className="btn removebtn btn-danger rounded-pill ms-2"
                        onClick={() => removeItem(item.id)}
                        > &nbsp; Remove Item &nbsp;</button>
                    </td>
                    </tr>
                        )
                        })}
                </tbody>
                </table>
                </div>
                <div className="col-auto me-auto" ><br></br>
                <h5> You have a total of ({totalUniqueItems}) items in your cart </h5>
                    <h5>  Pcs({totalItems})</h5>
                </div>
                <div className="col-auto ms-auto"><br/>
<h5 style={{ fontWeight:'600' }} > Subtotal ${cartTotal}</h5>

                </div>
                <div className="col-auto">
                    <div> </div>
                    <button 
                    className="btn clear  rounded-pill m-2" style={{ border:'1px solid', backgroundColor: '#000000' ,color:'white' }}                 
                    onClick={() => emptyCart()}
                    >&nbsp;     Clear Cart &nbsp;</button>
                    <button  className=" btn buy-btn rounded-pill m-2"  style={{  border: '1px solid' ,color:'black' }}
                    > &nbsp; Buy Now &nbsp;</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;