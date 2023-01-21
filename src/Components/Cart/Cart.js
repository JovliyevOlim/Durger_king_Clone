import React from 'react';
import Button from "../Button";
import './cart.css'
function Cart({cartItems,onCheckout}) {

    const totalPrice = cartItems.reduce((a,c)=>a+c.price*c.quantity,0);

    return (
        <div className={'cart__container'}>
            {cartItems.length === 0 ? 'No items in cart' : ''}
            <br/>
            <span className="">
                Total price : ${totalPrice.toFixed(2)}
            </span>
            <Button
                title={`${cartItems.length === 0 ? "Order !" : "Checkout"}`}
                type={"checkout"}
                disable={cartItems.length === 0 ? true:false}
                onClick={onCheckout}
            />
        </div>
    );
}

export default Cart;
