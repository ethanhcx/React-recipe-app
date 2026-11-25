import { useFavourites } from "../../context/FavouritesContext";
import "./favouritebutton.css"

function FavouriteButton({ recipe }) {
    const { isFavourite, toggleFavourite } = useFavourites()
    const saved = isFavourite(recipe.id)

    return (
        <button type="button" 
        className={`favourite-button ${saved ? "favourite-button-active" : ""}`}
        onClick={() => toggleFavourite(recipe)}
        aria-pressed={saved}
        >{saved ? "♥ Saved" : "♡ Save"}</button>
    )
}

export default FavouriteButton;