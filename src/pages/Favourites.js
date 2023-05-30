import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritePage() {

    const favouritesCtx = useContext(FavouritesContext);
    let content;

    if(favouritesCtx.totalFavourites === 0) {
        content = <p>You got no favourites yet. Start adding some?</p>
    }
    else {
        content = <MeetupList meetups={favouritesCtx.favourites} />
    }

    return(
        <div>
            <h1>My Favourites</h1>
            {content}
        </div>
    );

}

export default FavouritePage;