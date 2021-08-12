import React from 'react';
import sneakerLogo from "../assets/img/logo.png";
import cartSVG from "../assets/img/cart.svg";
import userSVG from "../assets/img/user.svg";
import heartSVG from '../assets/img/heart.svg'
import {Link} from "react-router-dom";



export const Header = ({onOpen, totalPrice, cartCount, favoriteCount}) => {


    return (
        <header className={'d-flex justify-between align-center p-40'}>
            <Link to={'/'}>
                <div className={'d-flex align-center'}>
                    <img width={40} height={40} src={sneakerLogo} alt={'logo'}/>
                    <div>
                        <h3 className={'text-uppercase'}>
                            REACT SNEAKERS
                        </h3>
                        <p className={'opacity-5'}>
                            Магазин луших кросовок
                        </p>
                    </div>
                </div>
            </Link>

            <ul className={'d-flex'}>
                <li onClick={onOpen} className={'count mr-30 cu-p'}>
                    <img  src={cartSVG} alt={'cart'}/>
                    <span className={'ml-15'}>{totalPrice} руб.</span>
                    <i className={cartCount > 0 ? 'count--circle' : ''}>{cartCount > 0 ? cartCount : ''}</i>
                </li>
                <Link to={'/favorites'}>
                    <li  className={'count mr-30 cu-p'}>
                        <img  src={heartSVG} alt={'heart'} />
                         <i className={favoriteCount > 0 ? 'count--circle' : ''}>{favoriteCount > 0 ? favoriteCount : ''}</i>
                    </li>
                </Link>
                <Link to={'/orders'}>
                    <li >
                        <img src={userSVG} alt={'user'}/>
                         </li>
                </Link>
            </ul>
        </header>

    );
};

