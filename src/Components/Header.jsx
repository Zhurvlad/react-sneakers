import React from 'react';
import sneakerLogo from "../assets/img/logo.png";
import cartSVG from "../assets/img/cart.svg";
import userSVG from "../assets/img/user.svg";
import heartSVG from '../assets/img/heart.svg'
import {Link} from "react-router-dom";



export const Header = ({onOpen, totalPrice}) => {


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
                <li onClick={onOpen} className={'mr-30 cu-p'}>
                    <img  src={cartSVG} alt={'cart'}/>
                    <span className={'ml-15'}>{totalPrice} руб.</span>
                </li>
                <Link to={'/favorites'}>
                    <li  className={'mr-30 cu-p'}>
                        <img  src={heartSVG} alt={'heart'} />
                    </li>
                </Link>
                <Link to={'/user'}>
                    <li>
                        <img src={userSVG} alt={'user'}/>
                    </li>
                </Link>
            </ul>
        </header>

    );
};

