import { Product } from "./Product";
import { products } from "./products";


export const Products = () => {
    return (
        <section className="products">
        <div className="container">
        <h2 className="products__title">Чай</h2>

        <ul className="products__list">
        {products.map((item) => (
        <Product key={item.id} data={item} />
        ))}
        </ul>
    </div>
</section>
    );
};