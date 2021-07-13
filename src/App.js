import React from 'react';
import searchSVG from './assets/img/search.svg'

import {useDispatch, useSelector} from "react-redux";

import {Card} from "./Components/Card";
import {Header} from "./Components/Header";
import {Drawer} from "./Components/Drawer";
import {fetchSneaker} from "./Components/Redux/actions/sneaker";


import {addSneakerToCart, removeSneaker} from "./Components/Redux/actions/card";
import {LoadingBlock} from "./Components/LoadingBlock";
import btnRemoveSVG from "./assets/img/btn-remove.svg";
import axios from "axios";




function App() {
    const dispatch = useDispatch()

    const [visibleCard, setVisibleCard] = React.useState(false)
    const [searchValue, setSearchValue] = React.useState('')
    const item = useSelector(({sneaker}) => sneaker.items)
    const isLoading = useSelector(({sneaker}) => sneaker.isLoaded)
    const {totalPrice, totalTax, items} = useSelector(({cart}) => cart)


    const sneakerAddCart = async (obj) => {
       await  axios.post(`https://60e07aaa6b689e001788caa6.mockapi.io/cart`, obj)
        dispatch(addSneakerToCart(obj))
    }

    React.useEffect(() => {
        dispatch(fetchSneaker())
    }, [dispatch])

    const getInputValue = (e) => {
        setSearchValue(e.target.value)
    }



    const handleRemoveItem = async (id) => {
        axios.delete(`https://60e07aaa6b689e001788caa6.mockapi.io/cart/${id}`)
        dispatch(removeSneaker(id))

    }


    return (
        <div className="wrapper clear">
            {visibleCard && <Drawer {...items} handleRemoveItem={handleRemoveItem}  totalTax={totalTax} totalPrice = {totalPrice}  onClose={() =>setVisibleCard(false)} />}
            <Header totalPrice = {totalPrice} onOpen={() =>setVisibleCard(true)}/>
            <div className={'content p-40'}>
                <div className={'d-flex align-center justify-between mb-40'}>
                    <h1>{searchValue ? `Поиск по запросу: ${searchValue}` : 'Все кросовки'}</h1>
                    <div className={'search-block d-flex'}>
                        <img src={searchSVG} alt={'search'}/>
                        {searchValue && <img onClick={() => setSearchValue('')} className={'clear cu-p'} src={btnRemoveSVG} alt={'clear'}/>}
                        <input onChange={getInputValue} placeholder={'Поиск...'} value={searchValue}/>
                    </div>
                </div>
                <div className={'d-flex flex-wrap'}>
                    {isLoading ? item.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((obj,index) =>
                        <Card sneakerToCart = {sneakerAddCart} {...obj} key={obj+index} />
                    ): Array(9).fill(0).map((_, id) => <LoadingBlock key={_+id}/>)}
                </div>
            </div>
        </div>
    );
}

export default App;

