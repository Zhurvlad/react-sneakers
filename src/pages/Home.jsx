import React from 'react';
import searchSVG from "../assets/img/search.svg";
import btnRemoveSVG from "../assets/img/btn-remove.svg";
import {Card} from "../Components/Card";
import {LoadingBlock} from "../Components/LoadingBlock";


export const Home = ({item, isLoading, sneakerToFavorite, sneakerAddCart, cartItems, favorite}) => {
    const [searchValue, setSearchValue] = React.useState('')

    const getInputValue = (e) => {
        setSearchValue(e.target.value)
    }

//Исправить кривую верстку

    return (
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
                {isLoading ? item.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((obj,index) =>
                    <Card
                        sneakerToFavorite={sneakerToFavorite}
                        sneakerToCart = {sneakerAddCart}
                        cartAdded = {cartItems.some(cartObj => cartObj.id === obj.id)}
                        favorited = {favorite.some(favObj => favObj.id === obj.id)}
                        {...obj}
                        key={obj+index} />
                ): Array(9).fill(0).map((_, id) => <LoadingBlock  key={_+id}/>)}
            </div>
        </div>
    );
};

