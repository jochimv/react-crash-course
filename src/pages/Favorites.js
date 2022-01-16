import { useContext } from "react";
import FavoritesContext, { FavoritesContextfrom } from '../store/favorites-context';
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage(){
    const favoritesContext = useContext(FavoritesContext);
    let content;

    if (favoritesContext.length == 0){
        content = <p>You have no favorites. Start adding some?</p>
    } else {
        content = <MeetupList meetups={favoritesContext.favorites}></MeetupList>
    }

    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;