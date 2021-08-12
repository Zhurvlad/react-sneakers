import React from 'react';
import {Card} from "../Components/Card";
import CartEmpty from "../Components/CartEmpty";



export const Favorites = ({favorite, sneakerToFavorite, sneakerAddCart, cartItems}) => {


    return (
        <div className={'content p-40'}>
            {favorite.length ? <>
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>Избранные модели</h1>
                </div>
                <div className={'d-flex flex-wrap'}>
                    {favorite && favorite.map((obj, index) =>
                        <Card  {...obj} key={obj + index}
                               cartAdded={cartItems.some(cartObj => cartObj.id === obj.id)}
                               favorited
                               sneakerToFavorite={sneakerToFavorite}
                               sneakerToCart={sneakerAddCart}/>
                    )}
                </div>
            </> : <CartEmpty
                title={'Избранные модели'}
                description={'Список избранных моделей пуст. Начни делать покупки и добавь понравившиеся модели в избранное.'}
                button={'Вернуться назад'}
                img={false}
            />}
        </div>
    );
};

