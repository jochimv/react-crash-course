import { createContext, useState } from "react";

const FavoritesContext = createContext({ //FavoritesContext is react component. createContext() argument is initial value for the app 
    //dummy for auto-completion of the code
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {}, 
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
}); 


//this component must be wrapped around all the components that are interacting with the context
export function FavoritesContextProvider(props) {

    //we need to use state, because whenever we will change the state, the component will be re-evaulated (along with the children via props.children) and the values passed to the children   
    const [userFavorites, setUserFavories] = useState([]); //default argument is empty array of favorites
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    function addFavoriteHandler(favoriteMeetup){
        setUserFavories(previousUserFavorites => previousUserFavorites.concat(favoriteMeetup)) // concat is push but returns a new array
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavories(previousUserFavorites => previousUserFavorites.filter(meetup => meetup.id !== meetupId));
    }

    function itemIsFavoriteHandler(meetupId) { //whether a meetup is favorite
        return userFavorites.some(meetup => meetup.id === meetupId ) //returns true if any item in array matches our condition
    }

    return (
        <FavoritesContext.Provider value={context}> 
            {props.children}
        </FavoritesContext.Provider>);
}

export default FavoritesContext;