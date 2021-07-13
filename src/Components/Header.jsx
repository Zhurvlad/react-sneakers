import React from 'react';
import sneakerLogo from "../assets/img/logo.png";
import cartSVG from "../assets/img/cart.svg";
import userSVG from "../assets/img/user.svg";



export const Header = ({onOpen, totalPrice}) => {


    return (
        <header className={'d-flex justify-between align-center p-40'}>
            <div className={'d-flex align-center'}>
                <img width={40} height={40} src={sneakerLogo}/>
                <div>
                    <h3 className={'text-uppercase'}>
                        REACT SNEAKERS
                    </h3>
                    <p className={'opacity-5'}>
                        Магазин луших кросовок
                    </p>
                </div>
            </div>
            <ul className={'d-flex'}>
                <li onClick={onOpen} className={'mr-30 cu-p'}>
                    <img  src={cartSVG}/>
                    <span className={'ml-15'}>{totalPrice} руб.</span>
                </li>
                <li>
                    <img src={userSVG}/>
                </li>
            </ul>
        </header>

    );
};

