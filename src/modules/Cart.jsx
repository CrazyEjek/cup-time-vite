import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { CartItem } from "./CartItem.jsx";
import { SkeletonLoader } from "./SkeletonLoader.jsx";
import { useOrder } from "../context/OrderContext.jsx";
import { API_URL } from "../const.js";

export const Cart = () => {
    const [orderStatus, setOrderStatus] = useState(null);
    const [orderId, setOrderId] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const {cart, clearCart} = useCart();
    const {orderDetails, clearOrderDetails} = useOrder();

    const handleSubmit = async () => {
        const orderData = {
            ...orderDetails, 
            item: cart.map((item) => ({ id: item.id, quantity: item.quantity})),
        };

        try {
            const response = await fetch (`${API_URL}/api/orders`, {
                mmethod: "POST",
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if(!response.ok) {
                throw new Error ("Возникла ошибка при отправке заказа!");
            }
            const result = await response.json();
            setOrderStatus("success");
            setOrderId(result.order.id);
            clearCart();
            clearOrderDetails();
        } catch (error) {
            setOrderStatus("error");
            console.error(`Ошибка: ${error}`);
        } finally {
            setModalIsOpen(true)
        }
    };

    const totalPrice = cart
    ? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
    : 0;

    return (
        <section className="cart">
        <div className="container cart__container">
            <h2 className="cart__title">Корзина ({cart ? cart.length : 0})</h2>

            <ul className="cart__items">
            {cart ? (
            cart.map((item) => <CartItem key={item.id} data={item} />)
        ) : (<SkeletonLoader/> )}
            </ul>

            <div className="cart__summary">
                <h3 className="cart__summary-title">Итого</h3>
                <p className="cart__total">{totalPrice}&nbsp;₽</p>
                <button className="cart__order-button" onClick={handleSubmit}>Заказать</button>
            </div>
        </div>
    </section>
    )
};