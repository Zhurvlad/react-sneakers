import React from 'react';

import btnRemoveSVG from "../../assets/img/btn-remove.svg";
import arrowSVG from "../../assets/img/arrow.svg";


import {useSelector} from "react-redux";
import {Info} from "../Info";

import style from './Drawer.module.scss'


export const Drawer = ({onClose,
                           totalPrice,
                           totalTax,
                           handleRemoveItem,
                           onOrderSneaker,
                           opened}) => {

    const [visibleOrder, setVisibleOrder] = React.useState(true)

    const {items} = useSelector(({cart}) => cart)
    const {items : order} = useSelector(({orders}) => orders)

    console.log(order.length)

    const addedSneaker = Object.keys(items).map(key => {
        return items[key]
    })

    const onDeleteSneakers = (id) => {
        handleRemoveItem(id)
    }

    const onHandleOrderSneaker = () => {
        onOrderSneaker(items)
        setVisibleOrder(false)
    }



    return (
        <div className={`${style.overlay} ${opened ? style.overlayVisible : ''}`}>
            <div className={style.drawer}>
                <h2 className={'d-flex justify-between mb-30'}>Корзина
                    <img onClick={onClose} className={'cu-p'} src={btnRemoveSVG} alt={'Delete'}/>
                </h2>

                {items.length > 0 ?
                    <div className={'d-flex flex-column flex'}>
                        <div className="items flex">
                            {addedSneaker && addedSneaker.map((obj, id) => (

                                <div className={'cartItem d-flex align-center mb-20'} key={obj + id}>
                                    <div>
                                        <img className={'cartItemImg'} src={obj.img} alt={'sneakers'}/>
                                    </div>

                                    <div className={'mr-20 flex'}>
                                        <p className={'mb-5'}>{obj.name}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onDeleteSneakers(obj.id)} className={'removeBtn'}
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
                                    <span>С учётом НДС 20%:</span>
                                    <div></div>
                                    <b>{totalTax} руб. </b>
                                </li>
                            </ul>
                            <button onClick={onHandleOrderSneaker} className="greenButton">
                                Оформить заказ <img src={arrowSVG} alt="Arrow"/>
                            </button>
                        </div>
                    </div>
                    :
                    <Info visibleOrder={visibleOrder}
                          title={visibleOrder ? 'Корзина пустая' : 'Заказ оформлен!'}
                          description={visibleOrder
                              ? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                              : `Ваш заказ №${order.length}  скоро будет передан курьерской доставке`} onClose={onClose} />
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
