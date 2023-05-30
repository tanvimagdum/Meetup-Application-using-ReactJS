import { useContext } from 'react';
import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props) {

    const favouritesCtx = useContext(FavouritesContext);

    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

    function toggleFavoriteStatusHandler() {
        if(itemIsFavourite) {
            favouritesCtx.removeFavourite(props.id);
        }
        else {
            favouritesCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                description: props.description,
                address: props.address
            });
        }
    }

    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavourite ? 'Remove from favourites' : 'To Favourites'}
                    </button>
                </div>
            </li>
        </Card>
    
    );
}

export default MeetupItem;