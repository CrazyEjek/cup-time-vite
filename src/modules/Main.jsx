import { Navigate, Route, Routes } from "react-router-dom";
import { Products } from "./Products";
import { Promo } from "./Promo";
import { Cart } from "./Cart";
import { Order } from "./Order";

export const Main = () => {
    return (
    
         /* подключаем роуты реакат роут дом */
    <main className="main">

        <Routes>
            <Route path="/" element={<Navigate to="/products?category=tea" />} />
            <Route
                path="/products"
                element={
                <>
                <Promo/>
                <Products/>
                </>
            } />
   
        <Route path="/cart" 
        element={ 
        <>
        <Cart/> 
        <Order/>
        </>
    } />
    </Routes>
</main>
);
};