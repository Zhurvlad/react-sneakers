import React from 'react';


import {useDispatch, useSelector} from "react-redux";
import {Route} from 'react-router-dom'


import {Header} from "./Components/Header";
import {Drawer} from "./Components/Drawer";
import {fetchSneaker} from "./Components/Redux/actions/sneaker";


import {addSneakerToCart, removeSneaker} from "./Components/Redux/actions/card";


import {addSneakerToFavorite, removeFavoriteSneaker} from "./Components/Redux/actions/favorited";
import {Home} from "./pages/Home";
import {Favorites} from "./pages/Favorites";


const AppContext = React.createContext({})

function App() {
    const dispatch = useDispatch()

    const [visibleCard, setVisibleCard] = React.useState(false)
    const item = useSelector(({sneaker}) => sneaker.items)
    const isLoading = useSelector(({sneaker}) => sneaker.isLoaded)
    const {totalPrice, totalTax, items} = useSelector(({cart}) => cart)
    const favorite = useSelector(({favorite}) => favorite.items)



    const sneakerAddCart = (obj) => {
        if(items.find(item => item.id === obj.id)){
            dispatch(removeSneaker(obj.id))
        }else {
            dispatch(addSneakerToCart(obj))
        }
    }


    React.useEffect(() => {
        dispatch(fetchSneaker())
    }, [])



    const sneakerToFavorite = (obj) => {
        if(favorite.find(item => item.id === obj.id)){
            dispatch(removeFavoriteSneaker(obj.id))
        } else {
            dispatch(addSneakerToFavorite(obj))
        }

    }





    const handleRemoveItem = (id) => {
        /*axios.delete(`https://60e07aaa6b689e001788caa6.mockapi.io/cart/${id}`)*/
        dispatch(removeSneaker(id))

    }



    return (
        <div className="wrapper clear">
            {visibleCard && <Drawer {...items} handleRemoveItem={handleRemoveItem}  totalTax={totalTax} totalPrice = {totalPrice}  onClose={() =>setVisibleCard(false)} />}


                <Header totalPrice = {totalPrice} onOpen={() =>setVisibleCard(true)}/>

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
                           sneakerToFavorite={sneakerToFavorite}

                />
            </Route>
        </div>
    );
}

export default App;

