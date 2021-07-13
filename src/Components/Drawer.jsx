import React from 'react';

import btnRemoveSVG from "../assets/img/btn-remove.svg";
import arrowSVG from "../assets/img/arrow.svg";
import emptySVG from '../assets/img/empty-cart.jpg'

import {useDispatch, useSelector} from "react-redux";
import {removeSneaker} from "./Redux/actions/card";
import axios from "axios";

export const Drawer = ({onClose, totalPrice, totalTax, handleRemoveItem}) => {

    const {items} = useSelector(({cart}) => cart)

    const addedSneaker = Object.keys(items).map(key => {
        return items[key]
    })




    return (
        <div className={'overlay'}>
            <div className={'drawer'}>
                <h2 className={'d-flex justify-between mb-30'}>Корзина
                    <img onClick={onClose} className={'cu-p'} src={btnRemoveSVG} alt={'Delete'}/>
                </h2>

                {items.length > 0 ?
                    <div>
                        <div className="items">
                            {addedSneaker && addedSneaker.map((obj, id) => (

                                <div className={'cartItem d-flex align-center mb-20'} key={obj + id}>
                                    <div>
                                        <img className={'cartItemImg'} src={obj.img}/>
                                    </div>

                                    <div className={'mr-20 flex'}>
                                        <p className={'mb-5'}>{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => handleRemoveItem(id)} className={'removeBtn'}
                                         src={btnRemoveSVG}
                                         alt={'Delete'}/>
                                </div>

                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>{totalPrice} руб. </b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{totalTax} руб. </b>
                                </li>
                            </ul>
                            <button className="greenButton">
                                Оформить заказ <img src={arrowSVG} alt="Arrow"/>
                            </button>
                        </div>
                    </div>
                    : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                        <img className="mb-20" width="120px" height="120px" src={emptySVG} alt="Empty"/>
                        <h2>Корзина пустая</h2>
                        <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                        <button onClick={onClose} className="greenButton">
                            <img src={arrowSVG} alt="Arrow"/>
                            Вернуться назад
                        </button>
                    </div>
                }
            </div>
        </div>
    );
};

/*
<div className="overlay">
    <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
            Корзина <img className="cu-p" src={btnRemoveSVG} alt="Remove" />
        </h2>

        <div className="items">
            <div className="cartItem d-flex align-center mb-20">
                <img  className="cartItemImg" src={oneSneakers}/>

                <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <img className="removeBtn" src={btnRemoveSVG} alt="Remove" />
            </div>
        </div>

        <div className="cartTotalBlock">
            <ul>
                <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб. </b>
                </li>
                <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб. </b>
                </li>
            </ul>
            <button className="greenButton">
                Оформить заказ <img src={arrowSVG} alt="Arrow" />
            </button>
        </div>
    </div>
</div>*/
