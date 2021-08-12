import React from 'react';
import {Card} from "../Components/Card";
import CartEmpty from "../Components/CartEmpty";



export const Orders = ({orders}) => {

/*    const ordersSneaker = Object.keys(orders).map(key => {
        return orders[key]
    })*/


    const onOrdersSneaker = [].concat.apply([], orders)



    return (
        <div className={'content p-40'}>
            {orders.length ? <>
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>Ваши заказы</h1>
                </div>
                <div className={'d-flex flex-wrap'}>
                    {onOrdersSneaker && onOrdersSneaker.map((obj, index) =>
                        <Card  {...obj} key={obj + index} favorited={false}/>
                    )}
                </div>
            </>:
                <CartEmpty
            title={'У вас нет заказов'}
            description={'Здесь появятся купленые товары. Начать покупки?'}
            button={'За покупками'}
            img={true}
            />
            }
        </div>
    );
};

