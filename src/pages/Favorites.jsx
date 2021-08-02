import React from 'react';
import {Card} from "../Components/Card";



export const Favorites = ({favorite, sneakerToFavorite}) => {

    return (
        <div className={'content p-40'}>
            <div className={'d-flex align-center justify-between mb-40'}>
                <h1>Избранные</h1>
            </div>
            <div className={'d-flex flex-wrap'}>
                {favorite && favorite.map((obj,index) =>
                    <Card  {...obj} key={obj+index} favorited sneakerToFavorite={sneakerToFavorite}/>
                )}
            </div>
        </div>
    );
};

