import React from "react";
import CartEmptySVG from '../assets/img/empty-cart.png'
import {Link} from "react-router-dom";

function CartEmpty({title, description, button, img}) {
    return(
        <div className="cart cart--empty">
            <h2>{title} <i>😕</i></h2>
            <p>
                {description}
            </p>
            {img && <img src={CartEmptySVG} alt="Empty cart"/>}
            <Link to="/" className="button button--black">
                <span>{button}</span>

            </Link>
        </div>
    )
}

export default CartEmpty;