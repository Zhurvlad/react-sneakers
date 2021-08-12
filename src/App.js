import React from 'react';


import {useDispatch, useSelector} from "react-redux";
import {Route} from 'react-router-dom'


import {Header} from "./Components/Header";
import {Drawer} from "./Components/Drawer";
import {fetchSneaker} from "./Components/Redux/actions/sneaker";


import {addSneakerToCart, clearCart, removeSneaker} from "./Components/Redux/actions/card";


import {addSneakerToFavorite, removeFavoriteSneaker} from "./Components/Redux/actions/favorited";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";
import {addSneakersOrder} from "./Components/Redux/actions/orders";
import {Orders} from "./pages/Orders";


function App() {
    const dispatch = useDispatch()

    const [visibleCard, setVisibleCard] = React.useState(false)
    const item = useSelector(({sneaker}) => sneaker.items)
    const isLoading = useSelector(({sneaker}) => sneaker.isLoaded)
    const {totalPrice, totalTax, items} = useSelector(({cart}) => cart)
    const favorite = useSelector(({favorite}) => favorite.items)
    const orders = useSelector(({orders}) => orders.items)



    const sneakerAddCart = (obj) => {
        if (items.find(item => item.id === obj.id)) {
            dispatch(removeSneaker(obj.id))
        } else {
            dispatch(addSneakerToCart(obj))
        }
    }


    React.useEffect(() => {
        dispatch(fetchSneaker())
    }, [dispatch])


    const sneakerToFavorite = (obj) => {
        if (favorite.find(item => item.id === obj.id)) {
            dispatch(removeFavoriteSneaker(obj.id))
        } else {
            dispatch(addSneakerToFavorite(obj))
        }

    }


    const handleRemoveItem = (id) => {
        /*axios.delete(`https://60e07aaa6b689e001788caa6.mockapi.io/cart/${id}`)*/
        dispatch(removeSneaker(id))

    }


    const onOrderSneaker = (orderObj) => {
        dispatch(addSneakersOrder(orderObj))
        dispatch(clearCart())
    }


    return (
        <div className="wrapper clear">
            <Drawer {...items}
                    handleRemoveItem={handleRemoveItem}
                    totalTax={totalTax}
                    totalPrice={totalPrice}
                    onClose={() => setVisibleCard(false)}
                    onOrderSneaker={onOrderSneaker}
                    opened={visibleCard}
            />


            <Header
                favoriteCount={favorite && favorite.length}
                cartCount={items && items.length}
                totalPrice={totalPrice}
                onOpen={() => setVisibleCard(true)}/>


            <Route path={'/'} exact>
                <Home
                    item={item}
                    favorite={favorite}
                    cartItems={items}
                    isLoading={isLoading}
                    sneakerToFavorite={sneakerToFavorite}
                    sneakerAddCart={sneakerAddCart}
                />
            </Route>
            <Route path={'/favorites'} exact>
                <Favorites favorite={favorite}
                           cartItems={items}
                           sneakerAddCart={sneakerAddCart}
                           sneakerToFavorite={sneakerToFavorite}

                />
            </Route>
            <Route path={'/orders'} exact>
                <Orders
                    orders={orders}
                        sneakerToFavorite={sneakerToFavorite}

                />
            </Route>
        </div>
    );
}

export default App;

