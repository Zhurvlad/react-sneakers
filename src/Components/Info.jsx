import React from 'react';
import emptySVG from "../assets/img/empty-cart.jpg";
import arrowSVG from "../assets/img/arrow.svg";
import orderSVG from "../assets/img/complete-order.jpg";

export const Info = ({onClose, title, description, visibleOrder}) => {
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px"  src={visibleOrder ?emptySVG : orderSVG} alt="Empty"/>
            <h2>{title}</h2>
            <p className="opacity-6">{description}</p>
            <button onClick={onClose} className="greenButton">
                <img src={arrowSVG} alt="Arrow"/>
                Вернуться назад
            </button>
        </div>
    );
};

