import React from 'react';
import unlikeSVG from "../../assets/img/unliked.svg";
import likeSVG from "../../assets/img/liked.svg";

import plusSVG from "../../assets/img/btn-plus.svg";
import checkedSVG from "../../assets/img/btn-checked.svg";


import style from './Card.module.scss'



export const Card= ({price, name, img, id, sneakerToCart, sneakerToFavorite, favorited, cartAdded, fav, add}) => {
    const [checked, setChecked] = React.useState(cartAdded)
    const [favorite, setFavorite] = React.useState(favorited)



    const obj ={
        id,
        price,
        name,
        img,
    }

    const onChecked = () => {
        setChecked(!checked)
    }

    const onSetAddSneaker =() => {
        sneakerToCart(obj)
    }

    const onFavorite = () => {
        setFavorite(!favorite)
        sneakerToFavorite(obj)
    }




    return (
        <div className={style.card}>
            {sneakerToFavorite && <div onClick={onFavorite} className={style.favorite}>
                <img src={favorited ? likeSVG : unlikeSVG} alt="Unlike"/>
            </div>}
            <img width={133} height={112} src={img} alt="Sneakers" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                {sneakerToCart && <div onClick={onSetAddSneaker}>
                    <img onClick={onChecked} className={style.plus} src={cartAdded ? checkedSVG : plusSVG} alt="Plus"/>
                </div>}
                 </div>
        </div>
    );
}

