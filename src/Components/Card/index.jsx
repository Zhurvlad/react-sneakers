import React from 'react';
import unlikeSVG from "../../assets/img/unliked.svg";

import plusSVG from "../../assets/img/btn-plus.svg";
import checkedSVG from "../../assets/img/btn-checked.svg";


import style from './Card.module.scss'


export const Card= ({price, name, img, id, sneakerToCart}) => {
    const [checked, setChecked] = React.useState(false)




    const onChecked = () => {
        setChecked(!checked)
    }

    const onSetAddPizza =() => {
        const obj ={
            id,
            price,
            name,
            img,
        }
        sneakerToCart(obj)
    }


    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img src={unlikeSVG} alt="Unlike" />
            </div>
            <img width={133} height={112} src={img} alt="Sneakers" />
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <div onClick={onSetAddPizza}>
                    <img  onClick={onChecked} className={style.plus} src={checked ? checkedSVG  : plusSVG} alt="Plus"/>
                </div>
                 </div>
        </div>
    );
}

