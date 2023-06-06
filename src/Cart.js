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
                    <h5> cart({totalUniqueItems}) total Items: ({totalItems})</h5>
                <table className="table table-light table-hover m-0">   
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
                        className="btn btn-dark rounded-circle ms-2" 
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        >-</button>
                        <button 
                        className="btn btn-dark rounded-circle ms-2"
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        >+</button>
                        <button 
                        className="btn btn-danger rounded-pill ms-2"
                        onClick={() => removeItem(item.id)}
                        > &nbsp; Remove Item &nbsp;</button>
                    </td>
                    </tr>
                        )
                        })}
                </tbody>
                </table>
                </div>
                <div className="col-auto ms-auto">
<h2> total price ${cartTotal}</h2>

                </div>
                <div className="col-auto">
                    <button 
                    className="btn btn-danger rounded-pill m-2"
                    onClick={() => emptyCart()}
                    >&nbsp;     Clear Cart &nbsp;</button>
                    <button  className=" btn btn-success rounded-pill m-2"> &nbsp; Buy Now &nbsp;</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;