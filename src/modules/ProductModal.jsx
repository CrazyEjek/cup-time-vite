
import Modal from "react-modal";
import { API_URL } from "../const";
import { useState } from "react";


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// елемент root в разметке html
Modal.setAppElement("#root");

export const ProductModal = ({isOpen, onRequestClose, data}) => {
    const [quantity, setQuantity] = useState(1);
    if (!data) {
        return null;
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        // !todo добавить товар в корзину
    };

    return <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Product Modal"
        >
            <h2>{data.title}</h2>
            <img src={`${API_URL}${data.img}`} alt={data.title} />
            <p>{data.price}</p>
            <ul>
                {Object.entries(data.additional).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={handleDecrease}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={handleIncrease}>+</button>
            </div>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
            <button onClick={onRequestClose}>Закрыть</button>
        </Modal>;
    

};